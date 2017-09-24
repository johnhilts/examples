using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using CountryStateList.Models;

namespace CountryStateList.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View(GetDefaultModel());
        }

        private JurisdictionModel GetDefaultModel()
        {
            var countryList = new List<CountryModel>
            {
                new CountryModel { Name = "Canada", Id = "CA", },
                new CountryModel { Name = "USA", Id = "US", },
                new CountryModel { Name = "Mexico", Id = "MX", },
            };

            var stateList = new List<StateModel>
            {
                new StateModel { Name = "California", Id = "CA", },
                new StateModel { Name = "Nevada", Id = "NV", },
            };

            return new JurisdictionModel { SelectedCountryId = "US", CountryList = countryList, StateList = stateList, };
        }
    }
}