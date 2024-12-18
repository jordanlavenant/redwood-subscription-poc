// import { Link, routes } from '@redwoodjs/router'
import { Metadata, useSubscription } from '@redwoodjs/web'

const NEW_MESSAGE_SUBSCRIPTION = gql`
  subscription ListenForNewMessagesInRoom($roomId: ID!) {
    newMessage(roomId: $roomId) {
      body
      from
    }
  }
`

const ReceiverPage = () => {
  const { data, loading, error } = useSubscription(NEW_MESSAGE_SUBSCRIPTION, {
    variables: { roomId: '1' },
  })

  if (loading) return <p>Wainting for message...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <>
      <Metadata title="Receiver" description="Receiver page" />
      <h1>ReceiverPage</h1>
      <p>
        Find me in <code>./web/src/pages/ReceiverPage/ReceiverPage.tsx</code>
      </p>
      <div>
        {data?.newMessage && (
          <div>
            <p>From: {data.newMessage.from}</p>
            <p>Body: {data.newMessage.body}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default ReceiverPage
