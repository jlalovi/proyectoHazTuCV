//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ProyectoCV.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    
    public partial class CVs
    {
        public string IdCV { get; set; }
        [Display(Name = "Nombre Completo")]
        public string NombreCompleto { get; set; }
        public string Email { get; set; }
        [Display(Name = "Teléfono")]
        public string Telefono { get; set; }
        public string Web { get; set; }
        [Display(Name = "Dirección")]
        public string Direccion { get; set; }
        [Display(Name = "Experiencia Laboral")]
        public string ExperienciaLaboral { get; set; }
        public string Cualificaciones { get; set; }
        [Display(Name = "Educación")]
        public string Educacion { get; set; }
        public string Intereses { get; set; }
        public string Referencias { get; set; }
        [Display(Name = "Tipo de CV")]
        public Nullable<int> TipoCV { get; set; }
    
        public virtual AspNetUsers AspNetUsers { get; set; }
    }
}
