import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span className="navBarTexto">
              Bruna Ferraz {"  "}
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet">
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="#d7a46a"
                  stroke="none">
                  <path
                    d="M1483 5110 c-38 -15 -51 -51 -78 -210 -52 -308 -96 -428 -234 -638
-109 -166 -182 -330 -221 -497 -21 -90 -140 -1143 -215 -1894 -38 -387 -32
-676 20 -946 43 -220 177 -659 230 -751 31 -53 105 -121 163 -147 46 -21 58
-22 452 -22 l405 0 56 26 c72 34 134 96 165 164 77 168 155 842 139 1205 -3
74 -8 187 -10 250 l-6 115 20 -45 c11 -25 87 -202 169 -395 259 -605 513
-1150 571 -1223 16 -21 53 -51 83 -68 52 -28 57 -29 220 -32 100 -2 189 1 222
8 138 28 257 123 322 255 33 67 38 88 42 163 4 77 -14 226 -54 461 -11 69 -86
101 -153 66 -50 -25 -51 -51 -20 -260 16 -105 29 -212 29 -240 0 -104 -80
-209 -181 -239 -36 -11 -94 -16 -185 -16 -124 0 -135 2 -158 22 -32 28 -371
746 -537 1136 l-41 95 7 101 c44 682 252 1307 620 1862 88 133 271 372 308
402 23 19 154 -15 250 -65 97 -50 220 -173 264 -264 55 -111 80 -268 52 -322
-6 -12 -129 -141 -273 -287 -235 -238 -266 -273 -299 -340 -50 -100 -77 -213
-77 -317 0 -85 52 -460 70 -500 23 -54 114 -69 160 -28 32 29 32 62 0 272 -42
279 -39 341 17 462 21 45 75 106 289 321 320 323 319 322 319 505 0 98 -5 133
-23 189 -105 314 -361 530 -689 581 -41 6 -43 9 -120 133 -138 225 -144 269
-87 639 31 200 35 237 24 264 -26 62 25 59 -1037 58 -535 0 -978 -4 -990 -9z
m917 -199 c0 -9 -108 -293 -113 -298 -4 -3 -701 88 -706 92 -2 3 4 52 14 110
l18 105 394 0 c233 0 393 -4 393 -9z m897 -23 c-3 -18 -11 -68 -18 -111 -7
-44 -17 -80 -23 -82 -21 -7 -737 -77 -742 -73 -2 3 21 71 53 151 l56 147 340
0 339 0 -5 -32z m-1407 -429 c179 -23 326 -43 328 -44 2 -2 -49 -207 -54 -213
-3 -4 -714 105 -720 110 -2 3 11 38 29 79 19 41 37 82 40 92 4 9 17 17 29 17
13 0 169 -19 348 -41z m1362 -36 c4 -34 11 -77 16 -96 l10 -35 -47 -6 c-118
-15 -844 -86 -851 -84 -7 3 42 194 51 202 2 2 148 18 324 36 176 17 349 35
385 40 106 13 104 14 112 -57z m-1518 -363 c214 -33 391 -61 392 -63 2 -2 0
-22 -4 -45 l-7 -42 -160 -54 c-88 -29 -193 -68 -234 -85 -40 -17 -77 -31 -82
-31 -5 0 -43 25 -83 55 -41 30 -127 89 -191 130 l-116 76 33 60 c18 32 39 59
48 59 8 0 190 -27 404 -60z m1689 -43 l48 -76 -57 -68 c-159 -187 -338 -454
-460 -690 -37 -70 -68 -129 -70 -131 -8 -11 -603 164 -623 184 -5 5 110 164
201 276 140 173 433 461 545 535 19 13 327 54 358 48 5 -1 31 -36 58 -78z
m-865 -99 c-57 -57 -145 -151 -196 -211 -50 -59 -92 -105 -92 -101 0 17 61
378 64 382 5 5 227 29 284 31 l43 1 -103 -102z m-1233 -209 c72 -49 173 -123
225 -164 130 -104 348 -302 402 -367 l44 -53 -9 -138 -10 -138 -35 43 c-19 24
-114 122 -211 218 -182 182 -310 290 -493 417 -86 59 -108 79 -108 98 0 24 25
140 36 169 7 19 -3 24 159 -85z m729 -171 c-13 -79 -23 -144 -23 -146 -1 -5
-211 192 -211 198 0 6 227 88 246 89 7 1 2 -49 -12 -141z m-812 -263 c70 -52
130 -100 133 -105 3 -5 -18 -24 -47 -42 -29 -18 -102 -65 -162 -105 -60 -41
-110 -72 -111 -71 -2 2 40 391 45 416 1 10 31 -10 142 -93z m1098 -280 c74
-25 203 -64 285 -87 83 -22 155 -43 161 -47 10 -5 -10 -67 -58 -183 -3 -8
-229 53 -394 106 l-111 36 -16 87 c-19 96 -21 133 -9 133 4 0 68 -20 142 -45z
m-698 -74 c119 -125 220 -245 293 -346 l57 -80 -6 -95 c-14 -194 -65 -379
-158 -564 -61 -121 -119 -185 -207 -229 -60 -29 -74 -32 -156 -32 -217 1 -332
114 -413 405 -45 160 -56 264 -49 468 3 97 9 186 12 197 7 21 99 96 231 188
87 60 285 185 295 186 4 1 49 -43 101 -98z m836 -391 c96 -27 177 -52 179 -54
2 -2 -10 -55 -26 -117 -35 -129 -76 -326 -86 -412 -4 -31 -11 -59 -15 -62 -9
-6 -87 205 -168 455 -65 203 -75 240 -66 240 3 0 85 -22 182 -50z m-329 -824
c16 -231 14 -654 -4 -842 -9 -87 -26 -225 -40 -305 -46 -272 -59 -307 -126
-342 -31 -16 -66 -17 -391 -15 -405 3 -392 1 -434 89 -63 130 -177 529 -215
749 -23 139 -37 532 -22 629 l8 55 40 -68 c49 -84 153 -183 234 -224 134 -67
310 -79 450 -31 88 30 204 110 257 178 50 63 142 237 180 339 14 37 28 74 31
82 7 17 17 -68 32 -294z"
                  />
                  <path
                    d="M3709 1391 c-60 -60 -27 -156 57 -168 36 -5 46 -1 75 25 28 25 34 37
34 72 0 35 -6 47 -33 71 -44 40 -93 40 -133 0z"
                  />
                </g>
              </svg>
            </span>
          </NavbarBrand>
          <Nav
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://api.whatsapp.com/send?phone=5511964230207&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20sua%20escola!"
                rel="noopener noreferrer"
                target="_blank"
                title="WhatsApp">
                <i class="lab la-whatsapp"></i>
              </NavLink>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/studiobrunaferraz/"
                rel="noopener noreferrer"
                target="_blank"
                title="Github">
                <i class="lab la-instagram"></i>
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://api.whatsapp.com/send?phone=5511964230207&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20sua%20escola!"
                rel="noopener noreferrer"
                target="_blank"
                title="WhatsApp">
                <i class="lab la-whatsapp"></i>
                <p className="">WhatsApp</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/studiobrunaferraz/"
                rel="noopener noreferrer"
                target="_blank"
                title="Github">
                <i class="lab la-instagram"></i>
                <p className="">Instagram</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
