using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using CountryStateList.Models;

namespace CountryStateList.Controllers
{
    [Route("api/jurisdiction")]
    public class JurisdictionApiController
    {
        [Route("states/{country}")]
        public List<StateModel> GetStateList(string country)
        {
            switch (country.ToUpper())
            {
                case "US":
                default:
                    return new List<StateModel>
                        {
                            new StateModel { Name = "California", Id = "CA", },
                            new StateModel { Name = "Nevada", Id = "NV", },
                        };
                case "CA":
                    return new List<StateModel>
                        {
                            new StateModel { Name = "British Columbia", Id = "BC", },
                            new StateModel { Name = "Alberta", Id = "AB", },
                        };
                case "MX":
                    return new List<StateModel>
                        {
                            new StateModel { Name = "Chihuahua", Id = "CH", },
                            new StateModel { Name = "Jalisco", Id = "JA", },
                        };
            }
        }
    }
}
