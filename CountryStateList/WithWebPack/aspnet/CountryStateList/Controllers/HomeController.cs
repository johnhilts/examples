using Microsoft.AspNetCore.Mvc;
using CountryStateList.Models;

namespace CountryStateList.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View(new HomeViewModel { Text = "Hello!" });
        }
    }
}