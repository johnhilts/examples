using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using NSpec;
using System.IO;
using NSpec.Api;
using NSpec.Domain; // SpecFinder
using NSpec.Domain.Formatters; // ConsoleFormatter
 
namespace Calculator.specs
{
    class Program 
    {
        /*
         * Original version, from NSpec documentation, or Gist example:
            var types = GetType().GetTypeInfo().Assembly.GetTypes();
  
         * leads to: 
            Program.cs(17,21): error CS0120: An object reference is required for 
                                the nonstatic field, method, or property 'member' 
                                'object.GetType()' [./Calculator/specs/specs.csproj]            
         */
        static void Main(string[] args)
        {
            var types = typeof(Program).Assembly.GetTypes();
            var finder = new SpecFinder(types, "");
            var tagsFilter = new Tags().Parse("");
            var builder = new ContextBuilder(finder, tagsFilter, new DefaultConventions());
            var runner = new ContextRunner(tagsFilter, new ConsoleFormatter(), false);
            var results = runner.Run(builder.Contexts().Build());
 
            if(results.Failures().Count() > 0)
            {
                Environment.Exit(1);
            }
        }
    }
}