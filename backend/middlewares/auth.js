const JWT_SECRET =
  'eyJhbGciOiJIUzUxMiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcyMjUyMjI3NywiaWF0IjoxNzIyNTIyMjc3fQ.b88JMvMrMQOEkFP_4QFNivE_f6M-w3bi4toHBVf9TRH11n3oetcutV5VewaQOmjWkU64Q3j066ZOj09VIWIefA';
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
