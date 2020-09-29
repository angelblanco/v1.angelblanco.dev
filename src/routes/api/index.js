export async function  get(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({name: "Sapper press API"}));
};