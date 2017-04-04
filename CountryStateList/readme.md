### Integrating reactjs components with asp.net mvc (4.6.2)

**Tools and technologies used**

VS 2017 (asp.net)
- asp.net mvc website template with web api

atom (reactjs)
- create-react-app

additional JS dependencies:
- pubsubjs
- axios

This example demonstrates the following:
- how to pass data to react components from regular JavaScript
- how 2 non-related components can communicate with each other (via pub/sub)
- how a component can use Ajax to get data from a server (using axios)
- doing all of the above in the context of an asp.net mvc razor view

Prior to using react, I have worked with angular 1.x. Integrating angular with asp.net is relatively straight-forward; you can add angular attributes to existing HTML elements which provides a way to do data-binding between said elements and an angular app and controller. 

On the other hand, react is more component centric. You can have an existing HTML page, but instead adding attributes to an existing element, the element itself becomes a react component, or even a set of nested components. 

So, the workflow enforces separation of concerns even more than angular ever did. react components get created in a separate "workspace", and are generated using its own build. asp.net mvc site is also generated using its own build tools. Then for the HTML page to use the react components, it needs to reference the JS bundle produced by the react build.

In this example, I created 2 components - a state dropdown and country dropdown. When the selected country changes, the state dropdown is repopulated based on the results of an Ajax call. Both components are initialized with JSON that is passed directly to them via attributes. The JSON in this case happens to be generated on the server and serialized to JSON on page load, instead of using Ajax.

### Key code snippets
1. Pass data to a react component from a non-react JavaScript block
```html
<div id="countries"></div>
```
```javascript
var countries = document.getElementById('countries');
countries.dataset.countryList = 
  JSON.stringify([{'name': 'USA', 'value': 'US'}, {'name': 'Canada', 'value': 'CA'}]);
```
Put the react CountryList component in the countries div:
```javascript
let countries = document.getElementById('countries');
ReactDOM.render(
  <CountrySelect {...(countries.dataset)} />,
  countries
);
```
Then, inside the component itself:
```javascript
class CountrySelect extends Component {
  constructor(props) {
    super(props);
    this.state = {countryList: JSON.parse(props.countryList), };
  }
```
2. Communicate between 2 independent components

If you have components that aren't siblings, or nested, then getting information sent between them requires something like redux, mobx, or some other kind of observer pattern implementation. pubsubjs actually makes it very easy to set up simple Pub/Sub.
To subscribe:
```javascript
componentDidMount() {
 this.token = PubSub.subscribe('COUNTRY_CHANGED', 
   (msg, data) => console.log(`Country changed to: ${data}`))
}
```
(unsubscribe when components unmounted)
```javascript
componentWillUnmount() {
 PubSub.unsubscribe(this.token)
}
```
Publish a message:
```javascript
PubSub.publish('COUNTRY_CHANGED', 'US')
```
Since building the react components for every change is kind of a drag, I can make a dummy HTML page that also hosts the components to do quicker UI verification. How well that approach scales likely depends on each situation, but one barrier is that to make the Ajax calls from the dummy react HTML page to the asp.net server which will usually be hosted on a different IP and / or port number, an error message appears complaining that Access-Control-Allow-Origin isn't set in the header. To get around that, in IIS under HTTP Response Headers add an entry for "Access-Control-Allow-Origin" with "*" for the value. This is **not** a problem when using the react components with the bundle on the asp.net pages.

