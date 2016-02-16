using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data;
using System.Data.Entity;
using ProyectoCV.Models; // Para poder declarar el dbcontext 'bbdd' sin tener que indicar la ruta completa.
using Microsoft.AspNet.Identity;

namespace ProyectoCV.Controllers
{
    [Authorize]
    public class CVController : Controller
    {

        private GestionCVsEntities bbdd = new GestionCVsEntities(); // A mi contexto de datos le llamaré bbdd para ser más semántico

        // GET: CV
        public ActionResult Index()
        {
            CVs CV = bbdd.CVs.Find(User.Identity.GetUserId());
            if ( CV != null)
                return View(CV);
            else
                return View("CrearCV");
        }

        // GET: CV/CrearCV
        public ActionResult CrearCV()
        {
            CVs CV = bbdd.CVs.Find(User.Identity.GetUserId());
            if (CV != null)
                return RedirectToAction("Index");
            else
                return View();
        }

        [HttpPost]
        [ValidateInput(false)] // Para poder recibir posts con etiquetas '<><>'
        public ActionResult CrearCV([Bind(Include = "NombreCompleto,Email,Telefono,Web,Direccion,ExperienciaLaboral,Cualificaciones,Educacion,Intereses,Referencias")] CVs CV)
        {
            if (ModelState.IsValid)
            {
                CV.IdCV = User.Identity.GetUserId(); // La clave primaria del CV será la misma que la del usuario
                CV.TipoCV = 1; // Por defecto, el tipo de CV empezará siendo de tipo 1. Se podrá modificar en el modo editar.
                bbdd.CVs.Add(CV);
                bbdd.SaveChanges();                
            }

            return RedirectToAction("Index"); // Desde la consulta tipo AJAX ($post), que estoy haciendo, no captura este return
                                              // No obstante dejo esto abierto por si decido hacerlo web 2.0 en futuro
        }

        // GET: CV/EditarCV
        public ActionResult EditarCV()
        {
            CVs CV = bbdd.CVs.Find(User.Identity.GetUserId());
            if (CV == null)
                return View("CrearCV");
            else
                return View(CV);
        }

        [HttpPost]
        [ValidateInput(false)] // Para poder recibir posts con etiquetas '<><>'
        public ActionResult EditarCV([Bind(Include = "NombreCompleto,Email,Telefono,Web,Direccion,ExperienciaLaboral,Cualificaciones,Educacion,Intereses,Referencias")] CVs CV)
        {

                CVs CVAntes = bbdd.CVs.Find(User.Identity.GetUserId());
                CV.IdCV = User.Identity.GetUserId(); // La clave primaria del CV será la misma que la del usuario
                CV.TipoCV = CVAntes.TipoCV;
                bbdd.Entry(CVAntes).CurrentValues.SetValues(CV); // No sé porqué pero no me actualiza así: 'bbdd.Entry(CV).State = EntityState.Modified;'
                bbdd.SaveChanges();

            return RedirectToAction("Index"); // Desde la consulta tipo AJAX ($post), que estoy haciendo, no captura este return
                                              // No obstante dejo esto abierto por si decido hacerlo web 2.0 en futuro
        }

        [HttpPost]
        [ValidateInput(false)]
        public ActionResult EditarEstiloCV([Bind(Include = "TipoCV")] CVs CV)
        {
            CVs CVAntes = bbdd.CVs.Find(User.Identity.GetUserId());

            CV.IdCV = User.Identity.GetUserId();
            CV.NombreCompleto = CVAntes.NombreCompleto;
            CV.Email = CVAntes.Email;
            CV.Telefono = CVAntes.Telefono;
            CV.Web = CVAntes.Web;
            CV.Direccion = CVAntes.Direccion;
            CV.ExperienciaLaboral = CVAntes.ExperienciaLaboral;
            CV.Cualificaciones = CVAntes.Cualificaciones;
            CV.Cualificaciones = CVAntes.Cualificaciones;
            CV.Intereses = CVAntes.Cualificaciones;

            bbdd.Entry(CVAntes).CurrentValues.SetValues(CV);
            bbdd.SaveChanges();

            return RedirectToAction("Index"); // Desde la consulta tipo AJAX ($post), que estoy haciendo, no captura este return
                                              // No obstante dejo esto abierto por si decido hacerlo web 2.0 en futuro
        }
    }
}