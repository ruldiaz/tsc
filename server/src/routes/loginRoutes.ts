import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
};

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if( req.session && req.session.loggedIn ) {
    next();
    return;
  }

  res.status(403);
  res.send('Not authorized');
}

const router = Router();



router.post('/login', (req: RequestWithBody, res: Response)=>{
  const { email, password } = req.body;

  if( email && password && email === 'hola@hola.com' && password === 'password') {
    // mark this person as logged in
    req.session = { loggedIn: true };
    // redirect them to the root route
    res.redirect('/');
  } else {
    res.send('Invalid email or password');
  }
});

router.get('/', (req: Request, res: Response) => {
  if( req.session && req.session.loggedIn) {
    res.send(`
      <div>
      <div>You are logged in</div>
      <a href='/logout'>Logout</a>
      </div>
    `)
  } else {
    res.send(`
      <div>
      <div>You are NOT logged in</div>
      <a href='/login'>Login</a>
      </div>
    `)
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route, user logged in')
});

export { router };