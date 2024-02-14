import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError() as Error;

  if (!error) {
    return (
      <div
        id='error-page'
        className='flex flex-col justify-center items-center h-screen w-screen'
      >
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>An unknown error occurred.</i>
        </p>
      </div>
    );
  }

  console.error(error);

  return (
    <div
      id='error-page'
      className='flex flex-col justify-center items-center h-screen w-screen'
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.message}</i>
      </p>
    </div>
  );
}
