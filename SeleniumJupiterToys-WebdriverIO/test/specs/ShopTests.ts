import { BaseTest } from "./BaseTest";
import { HomePage } from "../model/pages/HomePage";
import { suite, test } from "@testdeck/mocha"
import { expect } from 'chai';
import { ShopPage } from "../model/pages/ShopPage";
import { Product } from "../model/products/Product";

@suite
export class ShopTests extends BaseTest {
    @test
    public async 'Validate price for product'() {
        let homePage = new HomePage();
        homePage.clickShopMenu();
        let shopPage = new ShopPage();
        let product:Product = shopPage.getProduct(p => p.getTitle() == 'Teddy Bear');
        expect(product.getPrice()).to.equal(12.99);
    }
}
