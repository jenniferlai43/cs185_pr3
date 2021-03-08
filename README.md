# Running zoom meeting manager server for PR4
1. Run ```npm run start``` to start the React server.
2. Run ```npm run server``` to start the local JSON server.
3. Access the local react page with the url ```http://localhost:3000/cs185_pr3```
4. Navigate to the 'Zoom Meeting Manager' tab on the webpage.
5. What you can do on the manager page:
	- Add a meeting
	- Return back to full schedule
	- Double click on a meeting to update its details
	- Click on the delete button on a meeting to delete it from the db
6. You can access the local JSON db with ```http://localhost:5000/tasks``` which should display the JSON format of the DB and accurately reflect any DB updates made via the React frontend.

Note: Double clicking on a meeting will render a form on the page to update its details. You can return back to the full schedule by clicking the "<< View Schedule" button.
