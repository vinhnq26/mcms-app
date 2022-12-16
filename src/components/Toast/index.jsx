import React from 'react';

import { ToastContainer, toast } from 'react-toastify';

import './index.scss';

const Toast = () => {
  return <ToastContainer hideProgressBar={true} />;
};

const notify = (msg, type = 'success') => {
  switch (type) {
    case 'error':
      toast.error(msg, {
        className: 'bg-danger',
      });
      break;
    case 'warn':
      toast.warn(msg, {
        className: 'bg-info',
      });
      break;
    case 'success':
      toast.success(msg, {
        className: 'bg-success',
      });
      break;
    case 'promise':
      toast.promise(
        msg,
        {
          pending: {
            render() {
              return (
                <div className={`position-absolute top-50 start-50 translate-middle`}>
                  <div
                    className="spinner-border"
                    style={{ width: '1rem', height: '1rem' }}
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <span className="ps-2">Loading</span>
                </div>
              );
            },
            icon: true,
          },
          success: 'Complete. 👌',
          error: 'Error! 🤯',
        },
        {
          className: 'bg-dark',
        }
      );
      break;

    default:
      toast.info(msg, {
        className: 'bg-info',
      });
      break;
  }
};

const notifyHTML = (text, type = 'success') => {
  switch (type) {
    case 'error':
      toast.error(<div className="text-white" dangerouslySetInnerHTML={{ __html: text }} />, {
        className: 'bg-danger',
      });
      break;

    case 'success':
      toast.success(<div className="text-white" dangerouslySetInnerHTML={{ __html: text }} />, {
        className: 'bg-success',
      });
      break;

    default:
      toast.success(<div className="text-white" dangerouslySetInnerHTML={{ __html: text }} />, {
        className: 'bg-success',
      });
      break;
  }
};

export { Toast, notify, notifyHTML };
