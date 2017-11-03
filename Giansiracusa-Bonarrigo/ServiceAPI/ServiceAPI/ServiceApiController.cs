using Microsoft.AspNetCore.Mvc;
using ServiceAPI.Dal;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading;

namespace ServiceAPI
{
    [Route("api")]
    public class ServiceApiController : Controller
    {
        static readonly object setupLock = new object();
        static readonly SemaphoreSlim parallelism = new SemaphoreSlim(2);

        [HttpGet("setup")]
        public IActionResult SetupDatabase()
        {
            lock (setupLock)
            {
                using (var context = new StudentsDbContext())
                {
                    // Create database
                    context.Database.EnsureCreated();
                }
                return Ok("database created");
            }
        }


        [HttpGet("students")]
        public async Task<IActionResult> GetStudents()
        {
            try
            {
                await parallelism.WaitAsync();

                using (var context = new StudentsDbContext())
                {
                    return Ok(await context.Students.ToListAsync());
                }
            }
            finally
            {
                parallelism.Release();
            }
        }

        [HttpGet("courses")]
        public async Task<IActionResult> GetCourses()
        {
            try
            {
                await parallelism.WaitAsync();

                using (var context = new StudentsDbContext())
                {
                    return Ok(await context.Courses.ToListAsync());
                }
            }
            finally
            {
                parallelism.Release();
            }
        }

        

        [HttpGet("student")]
        public async Task<IActionResult> GetStudent([FromQuery]int id)
        {
            using (var context = new StudentsDbContext())
            {
                return Ok(await context.Students.FirstOrDefaultAsync(x => x.Id == id));
            }
        }

        // attraverso questa Api viene visualizzato per ogni studente una lista di corsi appartenenti
        //alla sua facoltà a cui esso può prenotarsi

        [HttpGet("coursesAvailable")]
        public async Task<IActionResult> GetCourses([FromQuery]int idStudent, string facolta)
        {
            using (var context = new StudentsDbContext())
            {
               
                List<Course> listaCorsi = await context.Courses.ToListAsync();
                List<Reservation> prenotazioni = await context.Reservations.ToListAsync();
                List<int> listaMateriePrenotate = new List<int>();
                List<Course> listaCorsiPrenotabili = new List<Course>();
                bool verifica;

                foreach (var prenotazione in prenotazioni) {
                    if (prenotazione.IdStudent == idStudent)
                        listaMateriePrenotate.Add(prenotazione.IdCouse);
                }
                
                for (int i = 0; i < listaCorsi.Count; i++) {
                   
                    if (!listaCorsi[i].faculty.Equals(facolta))
                        verifica = true;
                    else verifica = false;

                    for (int j = 0; j < listaMateriePrenotate.Count; j++)
                    {
                        if (listaCorsi[i].faculty.Equals(facolta))
                        {
                            if (listaCorsi[i].Id == listaMateriePrenotate[j])
                                verifica = true;
                        }
                        else verifica = true;
                        
                    }

                    if (verifica == false)
                        listaCorsiPrenotabili.Add(listaCorsi[i]);

                }

                return Ok(listaCorsiPrenotabili);
            }
        }

        // attraverso questa Api viene visualizzato per ogni studente la lista dei corsi prenotata

        [HttpGet("reservedCourses")]
        public async Task<IActionResult> GetCourses([FromQuery]int idStudent)
        {
            try
            {
                await parallelism.WaitAsync();

                using (var context = new StudentsDbContext())
                {
                    List<Reservation> prenotazioni = await context.Reservations.ToListAsync();
                    List<Course> listaCorsi = new List<Course>();
                    foreach (var prenotazione in prenotazioni)
                    {
                        if (prenotazione.IdStudent == idStudent)
                            listaCorsi.Add(await context.Courses.FirstOrDefaultAsync(x => x.Id == prenotazione.IdCouse));
                    }

                    return Ok(listaCorsi);
                }
            }
            finally
            {
                parallelism.Release();
            }
        }



        [HttpPut("students")]
        public async Task<IActionResult> CreateStudent([FromBody]Student student)
        {
            using (var context = new StudentsDbContext())
            {
                context.Students.Add(student);

                await context.SaveChangesAsync();

                return Ok();
            }
        }

        [HttpPut("courses")]
        public async Task<IActionResult> CreateCourse([FromBody]Course course)
        {
            using (var context = new StudentsDbContext())
            {
                context.Courses.Add(course);

                await context.SaveChangesAsync();

                return Ok();
            }
        }

        [HttpPut("reservations")]
        public async Task<IActionResult> CreateReservation([FromBody]Reservation reservation)
        {
            using (var context = new StudentsDbContext())
            {
                context.Reservations.Add(reservation);

                await context.SaveChangesAsync();

                return Ok();
            }
        }

        [HttpPost("students")]
        public async Task<IActionResult> UpdateStudent([FromBody]Student student)
        {
            using (var context = new StudentsDbContext())
            {
                context.Students.Update(student);
                await context.SaveChangesAsync();
                return Ok();
            }
        }

        [HttpPost("courses")]
        public async Task<IActionResult> UpdateCourse([FromBody]Course course)
        {
            using (var context = new StudentsDbContext())
            {
                context.Courses.Update(course);
                await context.SaveChangesAsync();
                return Ok();
            }
        }

        [HttpPost("reservations")]
        public async Task<IActionResult> UpdateReservation([FromBody]Reservation reservation)
        {
            using (var context = new StudentsDbContext())
            {
                context.Reservations.Update(reservation);
                await context.SaveChangesAsync();
                return Ok();
            }
        }


        [HttpDelete("students")]
        public async Task<IActionResult> DeleteStudent([FromQuery]int id)
        {
            using (var context = new StudentsDbContext())
            {
                var student = await context.Students.FirstOrDefaultAsync(x => x.Id == id);
                context.Students.Remove(student);
                await context.SaveChangesAsync();
                return Ok();


            }
        }

        [HttpDelete("courses")]
        public async Task<IActionResult> DeleteCourse([FromQuery]int id)
        {
            using (var context = new StudentsDbContext())
            {
                var course = await context.Courses.FirstOrDefaultAsync(x => x.Id == id);
                context.Courses.Remove(course);
                await context.SaveChangesAsync();
                return Ok();


            }
        }

        [HttpDelete("reservations")]
        public async Task<IActionResult> DeleteReservation([FromQuery]int id)
        {
            using (var context = new StudentsDbContext())
            {
                var reservation = await context.Reservations.FirstOrDefaultAsync(x => x.Id == id);
                context.Reservations.Remove(reservation);
                await context.SaveChangesAsync();
                return Ok();


            }
        }
    }
}
