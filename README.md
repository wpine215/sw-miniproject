# sw-miniproject
Software miniproject for Fall 2020 Senior Design

## Backend

The original Django backend (/backend/) is deprecated. The current backend is made using JavaScript and Express, and deployed via Google Firestore and Google Cloud Functions. Its code is in `/firebase/`.

![](https://github.com/wpine215/sw-miniproject/blob/master/docs/covid-19-5.png?raw=true)

## Admin Dashboard

The admin dashboard is hosted locally, and requires SSO (single sign on) for verified administrators to log in. To run the dashboard locally, execute `serve.sh` in the `/admin/` directory. If you run into any errors, make sure the script has execute permissions. The dashboard is present at `http://localhost:8000/`

### Screenshots:

Login screen:
![](https://github.com/wpine215/sw-miniproject/blob/master/docs/covid-19-1.png?raw=true)

Dashboard with COVID-19 API statistics
![](https://github.com/wpine215/sw-miniproject/blob/master/docs/covid-19-2.png?raw=true)

Dashboard with submitted survey results
![](https://github.com/wpine215/sw-miniproject/blob/master/docs/covid-19-3.png?raw=true)

Dashboard during unauthenticated login
![](https://github.com/wpine215/sw-miniproject/blob/master/docs/covid-19-4.png?raw=true)
