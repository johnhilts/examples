using System;

namespace Thing.Library
{
    public class Thing
    {
        private string _name;
        public string Name { get{return _name;} }

        public void SetName(string name) => _name = $"{name} Smith";
    }
}
