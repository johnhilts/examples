using System;
using NSpec;
using NSpec.Assertions;
using FluentAssertions;
using Thing.Library;

namespace ThingSpec
{
    public class describe_sample : nspec
    {
        void before_each()
        {
        }

        void after_each()
        {
        }

        void it_passes()
        {
            true.ShouldBeTrue();
        }

        void some_scenario()
        {
            before = () => { };

            act = () => { };

            context["some sub-scenario"] = () =>
            {
                before = () => { };

                it["passes"] = () => true.ShouldBeTrue();

                it["passes by throwing"] = () => expect<DivideByZeroException>(() => { throw new DivideByZeroException(); });
            };

            context["things"]=()=>
            {
                it["can set a thing's name and echo it back"]=()=>
                {
                    var testName = "John";
                    var expected = "John Smith";
                    var thing = new Thing.Library.Thing();
                    thing.SetName(testName);
                    var actual = thing.Name;
                    actual.Should().Be(expected);
                };
            };
        }
    }
}

