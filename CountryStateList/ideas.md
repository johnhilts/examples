<form>
<select>
<option value='CA'>California</option>
<option value='NV'>Nevada</option>
</select>

<select>
<option value='CA'>Canada</option>
<option value='US'>United States</option>
</select>
</form>

Actual HTML:
<form>
<StateList />
<CountryList />
</form>

Country List should be init'd on page load ... data will be passed in, but the data will be brought in by the server

State List should be loaded dynamically from the server, but it can be loaded on page load too based on default country selection

both are 2 separate independent components that have to communicate outside of react

	maybe using some kind of pub/sub ...?

