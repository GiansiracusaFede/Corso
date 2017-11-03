using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceAPI.Dal
{
    public class Reservation
    {
        public int Id { get; set; }
        public int IdStudent { get; set; }
        public int IdCouse { get; set; }
        public DateTime DateOfReservation { get; set; }
    }
}
