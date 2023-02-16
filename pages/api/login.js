export default handler = (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  switch (req.method) {
    case 'GET':
      handleGET(req, res);
      break;
    case 'POST':
      handlePOST(req, res);
      break;
  }
};

const handlePOST = (req, res) => {
  console.log(req);
  res.status(200).json({ name: 'Login' });
};
const handleGET = (req, res) => {
  console.log(req);
  res.status(200).json({ name: 'Login' });
};
