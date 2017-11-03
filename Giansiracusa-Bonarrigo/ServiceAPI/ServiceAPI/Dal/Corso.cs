using Microsoft.EntityFrameworkCore.Metadata;
using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceAPI.Dal
{
   public class Corso
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int crediti { get; set; }
    }
}
