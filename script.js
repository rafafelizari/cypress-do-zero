import axios from 'axios';

const num_activities = 10000;

const topic_id = 'a09134f0-55e7-4889-846f-8216aaecc58a';
const Authorization =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NjaGVkdWxlLmJhY2tlbmQuaW5jaWNsZWJldGEuY29tL2FwaS9hdXRoL2F1dGhlbnRpY2F0ZSIsImlhdCI6MTc1NDA1OTYzNywiZXhwIjoxNzkwMzQ3NjM3LCJuYmYiOjE3NTQwNTk2MzcsImp0aSI6ImhzSXBhMzVpdkZMN2NXYmwiLCJzdWIiOiIxMmU1M2ZlNy0wYzM0LTRlNGUtOThiMS02YTczMGNmNzk1ZGEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3IiwidXNlciI6eyJpZCI6IjEyZTUzZmU3LTBjMzQtNGU0ZS05OGIxLTZhNzMwY2Y3OTVkYSIsInVzZXJuYW1lIjoiY2VzYXItY3J1eiIsImVtYWlsIjoieWVmYXhlYzkxMkBhbWlyZWkuY29tIiwidHlwZSI6IlBFUlNPTiIsInByb2ZpbGVfaWQiOiJkNTc5YzI3NS0xZjM4LTQ2YzAtYjdhNi1jMmUwMTkyYjg4NDkiLCJjb25maWciOnsibWFzdGVyIjpmYWxzZSwiYXV0aDJmIjpmYWxzZSwiZGVmYXVsdF9sYW5ndWFnZSI6InB0IiwiZGVmYXVsdF9pbnRlcmZhY2UiOiJMSUdIVCIsInNjaGVkdWxlX2RlZmF1bHQiOiI4MTUxMjQzZC00NWE4LTRlZTItOWM3Ny1mZDE2Y2QyNWE3ZDciLCJkZWZhdWx0X3RpbWV6b25lIjoiQW1lcmljYS9TYW9fUGF1bG8ifX19.sAmxWGbK5DhXCaMdsaQCtdcYriH8gaG5RgA-LqX5Tt8';

const api = axios.create({
  baseURL: 'https://projects.backend.inciclebeta.com/api',
  headers: {
    Authorization,
    companyId: '4d7a2110-45c5-465d-bccf-806413fc1034',
    'content-type': 'application/json',
  },
});

async function createActivity(i) {
  try {
    await api.post(
      `/activities/${topic_id}`,
      {
        title: `Task ${i}`,
      },
      {
        headers: {
          Authorization,
          companyId: '4d7a2110-45c5-465d-bccf-806413fc1034',
          'content-type': 'application/json',
        },
      },
    );
    console.log(`Created activity ${i}`);
  } catch (error) {
    console.log(
      `Error creating activity ${i}:`,
      error.response.status,
      error.response.data,
    );
  }
}

for (let i = 1; i < num_activities; i++) await createActivity(i);