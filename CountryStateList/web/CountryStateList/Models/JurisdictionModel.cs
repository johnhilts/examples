using System.Collections.Generic;

namespace CountryStateList.Models
{
    public class JurisdictionModel
    {
        public string SelectedCountryId { get; set; }
        public List<CountryModel> CountryList { get; set; }
        public List<StateModel> StateList { get; set; }
    }
}