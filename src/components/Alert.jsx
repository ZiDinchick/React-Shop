import { useEffect } from 'react';

function Alert(props) {
  const { title = '', closeAlert = Function.prototype } = props;

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => clearTimeout(timerId);
  }, [title]);

  return (
    <div id="toast-container">
      <div className="toast">{title} add in cart</div>
    </div>
  );
}

export { Alert };
