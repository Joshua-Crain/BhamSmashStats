
const token = '';

const queryCall = async (token: string) => {
  await fetch('https://api.start.gg/gql/alpha',
    {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorization: `Bearer ${token}` 
      },
      body: JSON.stringify({
              query: `query EventStandings($eventId: ID!, $page: Int!, 
                $perPage: Int!) {
                event(id: $eventId) {
                  id
                  name
                  standings(query: {
                    page: $page
                    perPage: $perPage
                  }) {
                    pageInfo {
                      total
                      totalPages
                    }
                    nodes {
                      id
                      entrant {
                        name
                      },
                      placement
                    }
                  },
                }
              }`,
        variables: 
        {
          eventId: 1596037,
          page: 1,
          perPage: 22
        }
      }) 
    }).then(response => response.json())
    .then(data => {
      console.log(data.data.event.standings);
    })
}

queryCall(token);