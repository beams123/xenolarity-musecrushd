//    ___                                    _         _                 ______                 _____                  
//   / _ \                                  (_)       | |                |  ___|               / __  \                 
//  / /_\ \ _ __  _ __    ___   __ _   __ _  _   __ _ | |_   ___   _ __  | |_    _   _  _ __   `' / /'                 
//  |  _  || '__|| '_ \  / _ \ / _` | / _` || | / _` || __| / _ \ | '__| |  _|  | | | || '_ \    / /                   
//  | | | || |   | |_) ||  __/| (_| || (_| || || (_| || |_ | (_) || |    | |    | |_| || | | | ./ /___                 
//  \_| |_/|_|   | .__/  \___| \__, | \__, ||_| \__,_| \__| \___/ |_|    \_|     \__,_||_| |_| \_____/                 
//               | |            __/ |  __/ |                                                                           
//               |_|           |___/  |___/                                                                            
//   _             ______               _           _      _       ______                           _         _        
//  | |            | ___ \             | |         | |    | |      | ___ \                         | |       (_)       
//  | |__   _   _  | |_/ /  ___   _ __ | |_   __ _ | |__  | |  ___ | |_/ /  ___   _ __   ___   ___ | |  __ _  _  _ __  
//  | '_ \ | | | | |  __/  / _ \ | '__|| __| / _` || '_ \ | | / _ \|  __/  / _ \ | '__| / __| / _ \| | / _` || || '_ \ 
//  | |_) || |_| | | |    | (_) || |   | |_ | (_| || |_) || ||  __/| |    | (_) || |   | (__ |  __/| || (_| || || | | |
//  |_.__/  \__, | \_|     \___/ |_|    \__| \__,_||_.__/ |_| \___|\_|     \___/ |_|    \___| \___||_| \__,_||_||_| |_|
//           __/ |                                                                                                     
//          |___/                                                                                                      
t ? 0 : (s = Y = 0, X = 'repeat', R = sin, G = Array(12289).fill(0)),
s += I = 1.2,
T = Y++ * 1.08,
H = T / 65536 % 48,
Q = (x, y = 0, z = 255) => min(max(x, y), z),
L = (x, f) => (J = 0, x = min(max(x % 256, G[J] - f), G[J] + f), G[J] = x, J++, x),
lim = (x, P = .1) => (
	J = 0,
	x &= 255,
	V = G[J] = min(G[J] + P, x, 255),
	C = G[J + 1] = max(G[J + 1] - P, x, V + 9),
	J += 2,
	(x - V) * 255 / (C - V)),
n = k => Number.isNaN(k) ? 0 : k,
p = (k, l, q, z = T >> 12) => q(k * (n(l = l.charCodeAt(z % l.length)) <= 32 ? 0 : 2 ** ((l - 74) / 12))),
t2 = s / I | 0,
K = (x, L, F, D, W) => (E = J + (t2 % L), x = x * D + W * G[E], G[E] = x * F, J += L, x),
T /= 4,
a = abs(8 - int((B = T / 8192) * 8) % 16),
S = B * 2 % 32,
P = 'pnkgrnkipmigpnkg',
O = {
	b: s => p(s, '@@@@@@BCEEECCBCCEEEEECEEBBB@@@  ', k => k / 4 % 64 + (k / 4 + t / 1600) % 64) * 2,
	e: p(
		p(s / 2 ** (1 / 6), '@' [X](18) + '@B@' + '@' [X](75), k => k, T * 3 >> 12),
		'SSSSSSSQOOONNOLJLLLLLNLJIIIGGG  ',
		k => cbrt(R(k * PI / 32)) * 45) + 32,
	a: s => p(
		s * 2 ** ((12 * -int(a / 4)) / 12),
		P,
		k => (k / 8 & 31) * 1.5,
		a % 4 + (int(S / 8) * 4)),
	l: s => p(
		s,
		P,
		k => R(k * PI / 256) ** 3 * 32,
		(B * 2 | 0) * 3) * 2
},
M = {
	p: (a, b, c) => (K(
		L(O.b(s), R(t / 65536) * 4 + 8) + O.a(s) +
		(H > 8) * cbrt(R(cbrt(T & (H > 16 ? 8191 : 16383)) * 14)) * 32 +
		(H > 16) * (O.e + O.b(s * 1.5)) +
		(H > 24) * O.l(s) -
		(H > 32) * (O.a(s * 1.5) + (O.l(s * 2) + O.l(s / 2)) / 2),
		12288, a, b, c
	) / 256 - 1.4) / (H > 16 ? 2 : 1.5)
},

[
	Q(M.p(.5, .7 + R(s / 67890) / 9, 1.2 + R(s / 77777) / 5) + 1) - 1.1,
	Q(M.p(.5, .7 + R(s / 95492) / 7, 1.1 + R(s / 65500) / 10) + 1) - 1.1
];