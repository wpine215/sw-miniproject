# sw-miniproject
Software miniproject for Fall 2020 Senior Design

## Backend

The original Django backend (/backend/) is deprecated. The current backend is made using JavaScript and Express, and deployed via Google Firestore and Google Cloud Functions. Its code is in `/firebase/`.

## Admin Dashboard

The admin dashboard is hosted locally, and requires SSO (single sign on) for verified administrators to log in. To run the dashboard locally, execute `serve.sh` in the `/admin/` directory. If you run into any errors, make sure the script has execute permissions. The dashboard is present at `http://localhost:8000/`
