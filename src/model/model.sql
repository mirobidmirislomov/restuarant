create table categories(
    category_id serial not null primary key,
    category_name varchar(24) not null,
    category_img text not null
);

insert into categories(category_name, category_img) values('Milliy taomlar', 'https://avatars.mds.yandex.net/get-altay/5584259/2a0000017ed07dc695ff0e572efdcd8326d7/XXL');
insert into categories(category_name, category_img) values('Fast Food', 'https://s-english.ru/images/topik/fast-food.jpg');

create table restuarants(
    restuarant_id serial not null primary key,
    restuarant_name varchar(24) not null,
    restuarant_img text,
    category_id int references categories(category_id)
);

insert into restuarants(restuarant_name, restuarant_img, category_id) values('Rayxon', 'https://play-lh.googleusercontent.com/8pqrwZViX_tO0rG5x8rA_AuCITFcxbyBR4kuYoeEINDSx25SHaa40yTZRX2_bcU82TK6', 1);
insert into restuarants(restuarant_name, restuarant_img, category_id) values('Mazali oshxona', 'https://yt3.ggpht.com/ytc/AKedOLRIXzfIbVYADda3aNCDEae_yjl28MQNsA-E-25LjA=s900-c-k-c0x00ffffff-no-rj', 1);

insert into restuarants(restuarant_name, restuarant_img, category_id) values('KFC', 'https://play-lh.googleusercontent.com/S8RlnK4am6pET1R16PYMAC0lx9QOmfafblLIBRZ27L-kCgiK4tbtqTdy9VWiA8s_Zr3h', 2);
insert into restuarants(restuarant_name, restuarant_img, category_id) values('Burger King', 'https://www.creativosonline.org/wp-content/uploads/2022/03/Burger-king-logo.jpg', 2);

create table products(
    product_id serial not null primary key,
    product_name varchar(24) not null,
    product_img text not null,
    product_price bigint not null,
    restuarant_id int references restuarants(restuarant_id)
);

insert into products(product_name, product_img, product_price, restuarant_id) values('Assorti', 'https://scontent.ftas1-1.fna.fbcdn.net/v/t39.30808-6/244222253_3052865624943483_7163304043546620881_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_ohc=2IjLtBLJvA4AX8JgSQS&tn=e38mu5XBHSmpDHFq&_nc_ht=scontent.ftas1-1.fna&oh=00_AT_cqKBkhoVoRsGIl9jkf6ksl2CGd32VxhlxcbLavdoQtg&oe=62F1C282', 40000, 1);
insert into products(product_name, product_img, product_price, restuarant_id) values('Norin', 'https://scontent.ftas1-2.fna.fbcdn.net/v/t39.30808-6/243840167_3052143075015738_1171015099468134608_n.jpg?stp=dst-jpg_p843x403&_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=EutevRbGr6oAX8UyTBn&_nc_ht=scontent.ftas1-2.fna&oh=00_AT_oE0__RzE8TWTh_h2sJZEOTmJdKm1uCszgxjmA6FS2wQ&oe=62F0ECEB', 20000, 1);
insert into products(product_name, product_img, product_price, restuarant_id) values('Beshbarmoq', 'https://scontent.ftas2-2.fna.fbcdn.net/v/t39.30808-6/242207009_3043065859256793_129914263013316370_n.jpg?stp=dst-jpg_p843x403&_nc_cat=105&ccb=1-7&_nc_sid=a26aad&_nc_ohc=3XPi2mwW8eAAX9ML61C&_nc_ht=scontent.ftas2-2.fna&oh=00_AT8efYjkjVgJpMt8v00hy8HkS6Q2tcOcdFvDlS1S0Ns_Gg&oe=62F17E81', 25000, 1);
insert into products(product_name, product_img, product_price, restuarant_id) values('Osh', 'https://scontent.ftas1-1.fna.fbcdn.net/v/t39.30808-6/241564261_3040983662798346_3040804056579096710_n.jpg?stp=dst-jpg_p843x403&_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_ohc=tlnsIuIw0GsAX-j2cln&_nc_ht=scontent.ftas1-1.fna&oh=00_AT9j1xzjystPuqw9XKoVgF44Non2zHuwV2NJeb5eQrT8sg&oe=62F1828A', 25000, 1);

insert into products(product_name, product_img, product_price, restuarant_id) values('Manti', 'https://i.ytimg.com/vi/mio5O_EkaJI/maxresdefault.jpg', 14000, 2);
insert into products(product_name, product_img, product_price, restuarant_id) values('Somsa', 'https://makepedia.uz/wp-content/uploads/2018/06/samsa.jpg', 6000, 2);
insert into products(product_name, product_img, product_price, restuarant_id) values('Mastava', 'https://i.pinimg.com/474x/e3/10/3a/e3103acab20e5b989fd64df13e446e38.jpg', 20000, 2);
insert into products(product_name, product_img, product_price, restuarant_id) values('Chuchvara sho`rva', 'https://3.bp.blogspot.com/-cTEcsblYVfI/Wn0zwnbx_cI/AAAAAAAAAGc/nDl-6XOrzVAAaGEMYOYG9WceM-5XU5DCQCLcBGAs/s1600/chuchvara%2B%2Bshorva.jpg', 15000, 2);

insert into products(product_name, product_img, product_price, restuarant_id) values('Sanders Pita', 'https://static.kfc.com.uz/products/medium/product_2120_127995800.png', 20000, 3);
insert into products(product_name, product_img, product_price, restuarant_id) values('Boksmaster', 'https://static.kfc.com.uz/products/medium/product_1321_1818917424.png', 23000, 3);
insert into products(product_name, product_img, product_price, restuarant_id) values('Chizburger', 'https://static.kfc.com.uz/products/medium/product_1314_280821341.png', 15000, 3);
insert into products(product_name, product_img, product_price, restuarant_id) values('Shefburger', 'https://static.kfc.com.uz/products/medium/product_1316_318506902.png', 18000, 3);

insert into products(product_name, product_img, product_price, restuarant_id) values('Angus Parmazen', 'https://orderapp-static.burgerkingrus.ru/x512/mobile_image/d0f02215d3fe68a53aab8d6ea4999cf4.webp', 72000, 4);
insert into products(product_name, product_img, product_price, restuarant_id) values('Chedder Bekon King', 'https://orderapp-static.burgerkingrus.ru/x256/mobile_image/7d8e38412ba6f44a5ba78dbd8b149455.webp', 85000, 4);
insert into products(product_name, product_img, product_price, restuarant_id) values('Grand Cheese Fresh', 'https://orderapp-static.burgerkingrus.ru/x256/mobile_image/a082a58c01ae8b98b3351289d9b3529b.webp', 45000, 4);
insert into products(product_name, product_img, product_price, restuarant_id) values('Grand Cheese', 'https://orderapp-static.burgerkingrus.ru/x256/mobile_image/456213a9cdaa811dbec353a1b79f4ad9.webp', 36000, 4);


create table basket(
    product_id serial not null primary key,
    product_name varchar(24) not null,
    product_img text not null,
    product_price bigint not null,
    product_count int
);

create table orders(
    order_id serial not null primary key,
    product_name text not null,
    user_name varchar(64) not null,
    user_address varchar(64) not null,
    user_number varchar(24) not null,
    order_created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

insert into orders(product_name, user_name, user_address, user_number) values('lavash', 'a', 'toshkent', '+998999999999');