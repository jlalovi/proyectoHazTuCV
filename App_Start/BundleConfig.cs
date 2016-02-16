using System.Web;
using System.Web.Optimization;

namespace ProyectoCV
{
    public class BundleConfig
    {
        // Para obtener más información sobre Bundles, visite http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));
            
            // MIS SCRIPTS
            bundles.Add(new ScriptBundle("~/bundles/footerFijo").Include(
                        "~/Scripts/MisScripts/footerFijo.js"));

            bundles.Add(new ScriptBundle("~/bundles/SimpleWYSIWYG").Include(
                        "~/Scripts/MisScripts/SimpleWYSIWYG.js"));

            bundles.Add(new ScriptBundle("~/bundles/cambiarEstiloCV").Include(
                        "~/Scripts/MisScripts/cambiarEstiloCV.js"));

            bundles.Add(new ScriptBundle("~/bundles/postCrearCV").Include(
                        "~/Scripts/MisScripts/postCrearCV.js"));

            bundles.Add(new ScriptBundle("~/bundles/postEditarCV").Include(
                        "~/Scripts/MisScripts/postEditarCV.js"));

            // Utilice la versión de desarrollo de Modernizr para desarrollar y obtener información. De este modo, estará
            // preparado para la producción y podrá utilizar la herramienta de compilación disponible en http://modernizr.com para seleccionar solo las pruebas que necesite.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
