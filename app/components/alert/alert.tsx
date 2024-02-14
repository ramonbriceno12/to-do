export default function MyAlert({ message, type = 'info', handleDismiss }) {
    const alertClasses = {
      info: 'bg-blue-500 text-white font-medium px-4 py-3 rounded-full',
      success: 'bg-green-500 text-white font-medium px-4 py-3 rounded-full',
      warning: 'bg-yellow-500 text-white font-medium px-4 py-3 rounded-full',
      danger: 'bg-red-500 text-white font-medium px-4 py-3 rounded-full',
    };
  
    return (
      <div className={`${alertClasses[type]} flex items-center justify-between mb-10`}>
        <p className="text-sm">{message}</p>
        <button onClick={handleDismiss} type="button" className="ml-3 text-sm hover:bg-opacity-75">Dismiss</button>
      </div>
    );
}