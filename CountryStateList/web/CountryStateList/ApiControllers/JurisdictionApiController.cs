using CountryStateList.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CountryStateList
{
    [RoutePrefix("api/jurisdiction")]
    public class JurisdictionApiController : ApiController
    {
        [Route("states/{country}")]
        public List<StateModel> GetStateList(string country)
        {
            switch (country.ToUpper())
            {
                case "US":
                default:
                    return new List<StateModel> { new StateModel { Name = "California", Id = "CA", }, new StateModel { Name = "Nevada", Id = "NV", }, };
                case "CA":
                    return new List<StateModel> { new StateModel { Name = "British Columbia", Id = "BC", }, new StateModel { Name = "Alberta", Id = "AB", }, };
            }
        }
    }
}