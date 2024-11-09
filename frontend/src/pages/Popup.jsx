import { useEffect } from 'react';

export default function() {
  useEffect(() => {
    console.log("Hello from the popup!");
  }, []);

  return (
    <div>
      <h1>Spectre</h1>
      <p>
        Template: <code>react-js</code>
      </p>
    </div>
  )
}
