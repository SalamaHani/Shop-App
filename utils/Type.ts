import { Prisma } from "@prisma/client";
export type actionFunction = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;
export type CartItemWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true };
}>;

export const Cuanters = [
  { iso_code: "ZA", country: "South Africa" },
  { iso_code: "AT", country: "Austria" },
  { iso_code: "IN", country: "India" },
  { iso_code: "AF", country: "Afghanistan" },
  { iso_code: "AL", country: "Albania" },
  { iso_code: "DE", country: "Germany" },
  { iso_code: "AD", country: "Andorra" },
  { iso_code: "AO", country: "Angola" },
  { iso_code: "AI", country: "Anguilla" },
  { iso_code: "AQ", country: "Antarctica" },
  { iso_code: "AG", country: "Antigua and Barbuda" },
  { iso_code: "AN", country: "Netherlands Antilles" },
  { iso_code: "SA", country: "Saudi Arabia" },
  { iso_code: "DZ", country: "Algeria" },
  { iso_code: "AR", country: "Argentina" },
  { iso_code: "AM", country: "Armenia" },
  { iso_code: "AW", country: "Aruba" },
  { iso_code: "AU", country: "Australia" },
  { iso_code: "AZ", country: "Azerbaijan" },
  { iso_code: "BE", country: "Belgium" },
  { iso_code: "BA", country: "Bosnia and Herzegovina" },
  { iso_code: "BS", country: "Bahamas" },
  { iso_code: "BD", country: "Bangladesh" },
  { iso_code: "BH", country: "Bahrain" },
  { iso_code: "BB", country: "Barbados" },
  { iso_code: "BZ", country: "Belize" },
  { iso_code: "BJ", country: "Benin" },
  { iso_code: "BM", country: "Bermuda" },
  { iso_code: "BY", country: "Belarus" },
  { iso_code: "MM", country: "Burma" },
  { iso_code: "BO", country: "Bolivia" },
  { iso_code: "BW", country: "Botswana" },
  { iso_code: "BR", country: "Brazil" },
  { iso_code: "BN", country: "Brunei" },
  { iso_code: "BG", country: "Bulgaria" },
  { iso_code: "BI", country: "Burundi" },
  { iso_code: "BF", country: "Burkina Faso" },
  { iso_code: "BT", country: "Bhutan" },
  { iso_code: "CV", country: "Cape Verde" },
  { iso_code: "CM", country: "Cameroon" },
  { iso_code: "KH", country: "Cambodia" },
  { iso_code: "CA", country: "Canada" },
  { iso_code: "QA", country: "Qatar" },
  { iso_code: "KZ", country: "Kazakhstan" },
  { iso_code: "TD", country: "Chad" },
  { iso_code: "CL", country: "Chile" },
  { iso_code: "CN", country: "China" },
  { iso_code: "CY", country: "Cyprus" },
  { iso_code: "CO", country: "Colombia" },
  { iso_code: "KM", country: "Comoros" },
  { iso_code: "CG", country: "Congo-Brazzaville" },
  { iso_code: "CD", country: "Congo-Kinshasa" },
  { iso_code: "KP", country: "North Korea" },
  { iso_code: "KR", country: "South Korea" },
  { iso_code: "CR", country: "Costa Rica" },
  { iso_code: "CI", country: "Ivory Coast" },
  { iso_code: "HR", country: "Croatia" },
  { iso_code: "CU", country: "Cuba" },
  { iso_code: "DK", country: "Denmark" },
  { iso_code: "DM", country: "Dominica" },
  { iso_code: "EG", country: "Egypt" },
  { iso_code: "AE", country: "United Arab Emirates" },
  { iso_code: "EC", country: "Ecuador" },
  { iso_code: "ER", country: "Eritrea" },
  { iso_code: "SK", country: "Slovakia" },
  { iso_code: "SI", country: "Slovenia" },
  { iso_code: "ES", country: "Spain" },
  { iso_code: "EE", country: "Estonia" },
  { iso_code: "US", country: "United States" },
  { iso_code: "ET", country: "Ethiopia" },
  { iso_code: "FO", country: "Faroe Islands" },
  { iso_code: "FJ", country: "Fiji" },
  { iso_code: "PH", country: "Philippines" },
  { iso_code: "FI", country: "Finland" },
  { iso_code: "FR", country: "France" },
  { iso_code: "GM", country: "Gambia" },
  { iso_code: "GA", country: "Gabon" },
  { iso_code: "GH", country: "Ghana" },
  { iso_code: "GE", country: "Georgia" },
  { iso_code: "GS", country: "South Georgia and the South Sandwich Islands" },
  { iso_code: "GI", country: "Gibraltar" },
  { iso_code: "GR", country: "Greece" },
  { iso_code: "GD", country: "Grenada" },
  { iso_code: "GL", country: "Greenland" },
  { iso_code: "GP", country: "Guadeloupe" },
  { iso_code: "GU", country: "Guam" },
  { iso_code: "GT", country: "Guatemala" },
  { iso_code: "GY", country: "Guyana" },
  { iso_code: "GF", country: "French Guiana" },
  { iso_code: "GN", country: "Guinea" },
  { iso_code: "GQ", country: "Equatorial Guinea" },
  { iso_code: "GW", country: "Guinea-Bissau" },
  { iso_code: "HT", country: "Haiti" },
  { iso_code: "HN", country: "Honduras" },
  { iso_code: "HK", country: "Hong Kong" },
  { iso_code: "HU", country: "Hungary" },
  { iso_code: "YE", country: "Yemen" },
  { iso_code: "BV", country: "Bouvet Island" },
  { iso_code: "NF", country: "Norfolk Island" },
  { iso_code: "CX", country: "Christmas Island" },
  { iso_code: "KY", country: "Cayman Islands" },
  { iso_code: "CK", country: "Cook Islands" },
  { iso_code: "FK", country: "Falkland Islands" },
  { iso_code: "HM", country: "Heard Island and McDonald Islands" },
  { iso_code: "MH", country: "Marshall Islands" },
  { iso_code: "UM", country: "United States Minor Outlying Islands" },
  { iso_code: "SB", country: "Solomon Islands" },
  { iso_code: "TC", country: "Turks and Caicos Islands" },
  { iso_code: "VI", country: "U.S. Virgin Islands" },
  { iso_code: "VG", country: "British Virgin Islands" },
  { iso_code: "CC", country: "Cocos Islands" },
  { iso_code: "ID", country: "Indonesia" },
  { iso_code: "IR", country: "Iran" },
  { iso_code: "IQ", country: "Iraq" },
  { iso_code: "IE", country: "Ireland" },
  { iso_code: "IS", country: "Iceland" },
  { iso_code: "IL", country: "Israel" },
  { iso_code: "IT", country: "Italy" },
  { iso_code: "JM", country: "Jamaica" },
  { iso_code: "JP", country: "Japan" },
  { iso_code: "DJ", country: "Djibouti" },
  { iso_code: "JO", country: "Jordan" },
  { iso_code: "YU", country: "Yugoslavia" },
  { iso_code: "KW", country: "Kuwait" },
  { iso_code: "LB", country: "Lebanon" },
  { iso_code: "LY", country: "Libya" },
  { iso_code: "LA", country: "Laos" },
  { iso_code: "LS", country: "Lesotho" },
  { iso_code: "LV", country: "Latvia" },
  { iso_code: "LR", country: "Liberia" },
  { iso_code: "LI", country: "Liechtenstein" },
  { iso_code: "LT", country: "Lithuania" },
  { iso_code: "LU", country: "Luxembourg" },
  { iso_code: "MX", country: "Mexico" },
  { iso_code: "MC", country: "Monaco" },
  { iso_code: "MO", country: "Macau" },
  { iso_code: "MK", country: "Macedonia" },
  { iso_code: "MG", country: "Madagascar" },
  { iso_code: "MY", country: "Malaysia" },
  { iso_code: "MW", country: "Malawi" },
  { iso_code: "MV", country: "Maldives" },
  { iso_code: "ML", country: "Mali" },
  { iso_code: "MT", country: "Malta" },
  { iso_code: "MP", country: "ds" },
  { iso_code: "MA", country: "Morocco" },
  { iso_code: "MQ", country: "Martinique" },
  { iso_code: "MU", country: "Mauritius" },
  { iso_code: "MR", country: "Mauritania" },
  { iso_code: "YT", country: "Mayotte" },
  { iso_code: "FM", country: "Micronesia" },
  { iso_code: "MZ", country: "Mozambique" },
  { iso_code: "MD", country: "Moldova" },
  { iso_code: "MN", country: "Mongolia" },
  { iso_code: "MS", country: "Montserrat" },
  { iso_code: "NE", country: "Niger" },
  { iso_code: "NA", country: "Namibia" },
  { iso_code: "NR", country: "Nauru" },
  { iso_code: "NP", country: "Nepal" },
  { iso_code: "NI", country: "Nicaragua" },
  { iso_code: "NG", country: "Nigeria" },
  { iso_code: "NU", country: "Niue" },
  { iso_code: "NO", country: "Norway" },
  { iso_code: "NC", country: "New Caledonia" },
  { iso_code: "NZ", country: "New Zealand" },
  { iso_code: "OM", country: "Oman" },
  { iso_code: "NL", country: "Netherlands" },
  { iso_code: "PW", country: "Palau" },
  { iso_code: "PA", country: "Panama" },
  { iso_code: "PG", country: "Papua New Guinea" },
  { iso_code: "PK", country: "Pakistan" },
  { iso_code: "PY", country: "Paraguay" },
  { iso_code: "PE", country: "Peru" },
  { iso_code: "PN", country: "Pitcairn" },
  { iso_code: "PL", country: "Poland" },
  { iso_code: "PF", country: "French Polynesia" },
  { iso_code: "PR", country: "Puerto Rico" },
  { iso_code: "PT", country: "Portugal" },
  { iso_code: "KE", country: "Kenya" },
  { iso_code: "KG", country: "Kyrgyzstan" },
  { iso_code: "KI", country: "Kiribati" },
  { iso_code: "RU", country: "Russia" },
  { iso_code: "GB", country: "United Kingdom" },
  { iso_code: "CF", country: "Central African Republic" },
  { iso_code: "CZ", country: "Czech Republic" },
  { iso_code: "DO", country: "Dominican Republic" },
  { iso_code: "RE", country: "Reunion" },
  { iso_code: "RO", country: "Romania" },
  { iso_code: "RW", country: "Rwanda" },
  { iso_code: "KN", country: "Saint Kitts and Nevis" },
  { iso_code: "SM", country: "San Marino" },
  { iso_code: "PM", country: "Saint Pierre and Miquelon" },
  { iso_code: "ST", country: "Sao Tome and Principe" },
  { iso_code: "VC", country: "Saint Vincent and the Grenadines" },
  { iso_code: "SY", country: "Syria" },
  { iso_code: "SV", country: "El Salvador" },
  { iso_code: "WS", country: "Samoa" },
  { iso_code: "AS", country: "American Samoa" },
  { iso_code: "SH", country: "Saint Helena" },
  { iso_code: "LC", country: "Saint Lucia" },
  { iso_code: "EH", country: "Western Sahara" },
  { iso_code: "SC", country: "Seychelles" },
  { iso_code: "SN", country: "Senegal" },
  { iso_code: "SL", country: "Sierra Leone" },
  { iso_code: "SG", country: "Singapore" },
  { iso_code: "SO", country: "Somalia" },
  { iso_code: "LK", country: "Sri Lanka" },
  { iso_code: "SE", country: "Sweden" },
  { iso_code: "CH", country: "Switzerland" },
  { iso_code: "SZ", country: "Swaziland" },
  { iso_code: "SD", country: "Sudan" },
  { iso_code: "SR", country: "Suriname" },
  { iso_code: "SJ", country: "Svalbard and Jan Mayen" },
  { iso_code: "TH", country: "Thailand" },
  { iso_code: "TW", country: "Taiwan" },
  { iso_code: "TJ", country: "Tajikistan" },
  { iso_code: "TZ", country: "Tanzania" },
  { iso_code: "IO", country: "British Indian Ocean Territory" },
  { iso_code: "TF", country: "French Southern Territories" },
  { iso_code: "TL", country: "Timor-Leste" },
  { iso_code: "TG", country: "Togo" },
  { iso_code: "TK", country: "Tokelau" },
  { iso_code: "TO", country: "Tonga" },
  { iso_code: "TT", country: "Trinidad and Tobago" },
  { iso_code: "TN", country: "Tunisia" },
  { iso_code: "TM", country: "Turkmenistan" },
  { iso_code: "TR", country: "Turkey" },
  { iso_code: "TV", country: "Tuvalu" },
  { iso_code: "UA", country: "Ukraine" },
  { iso_code: "UG", country: "Uganda" },
  { iso_code: "UY", country: "Uruguay" },
  { iso_code: "UZ", country: "Uzbekistan" },
  { iso_code: "VU", country: "Vanuatu" },
  { iso_code: "VA", country: "Vatican City" },
  { iso_code: "VE", country: "Venezuela" },
  { iso_code: "VN", country: "Vietnam" },
  { iso_code: "WF", country: "Wallis and Futuna" },
  { iso_code: "ZM", country: "Zambia" },
  { iso_code: "ZW", country: "Zimbabwe" },
];
export type CuantersT = {
  iso_code: string;
  country: string;
};
export type CartItem = {
  productId: string;
  image: string;
  title: string;
  price: string;
  amount: number;
  company: string;
};
export type CartState = {
  cartItems: CartItem[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
};
export type currenteCart = {
  id: string;
  userId: string;
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  taxRate: number;
  orderTotal: number;
  createdAt: Date;
  updatedAt: Date;
};

export interface UserFormData {
  FirstName: string;
  LastName: string;
  StreetAddress: number;
  Town: string;
  ZIPCode: number;
  email: string;
  Phone: number;
}
export interface LoginData {
  email: string;
  password: string;
}
export interface RegesterData {
  name: string;
  email: string;
  password: string;
}
export interface metaData {
  total: number;
  totalPage: number;
}
export interface UserData {
  id?: string;
  email: string;
  name: string;
  image?: string;
  phone?: number;
  city: string;
  bio: string;
  country: string;
  streetAddress?: number;
  createdAt?: string;
}
export interface ChangPass {
  password: string;
  password_confirmation: string;
}

export interface ActionResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  funactuon?: any;
  Data?: UserFormData;
  success: boolean;
  message: string;
  errors?: {
    [K in keyof UserFormData]?: string[];
  };
}
export interface ActionResponseere {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  funactuon?: any;
  Data?: LoginData;
  success: boolean;
  message: string;
  errors?: {
    [K in keyof LoginData]?: string[];
  };
}
export interface ActionResponsUpdeat {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  funactuon?: any;
  Data?: UserData;
  success?: boolean;
  message?: string;
  errors?: {
    [K in keyof UserData]?: string[] | number[];
  };
}
export interface ActionResponRegester {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  funactuon?: any;
  Data?: RegesterData;
  success: boolean;
  message: string;
  errors?: {
    [K in keyof RegesterData]?: string[];
  };
}
export interface ActionChangePass {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  funactuon?: any;
  Data?: ChangPass;
  success: boolean;
  message: string;
  errors?: {
    [K in keyof ChangPass]?: string[];
  };
}
