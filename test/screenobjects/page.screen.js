class Page {
    get attachment_box() {
        return ('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivImage"]')
    }
    get choose_from_gallery() {
        return ('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnChooseFromGallery"]')
    }
    get photo_folder() {
        return ('//*[@resource-id="com.sec.android.gallery3d:id/recycler_view_item"]')
    }
    get photo_item() {
        return ('//*[@resource-id="com.sec.android.gallery3d:id/deco_view_layout"]')
    }

    async click_item(item) {
        await $(item).waitForExist()
        // to be continued
    }

    async upload_attachment_image() {
        const attachment_box_list = await $$(this.attachment_box)
        for (let item of attachment_box_list) {
            await item.click()
            await $(this.choose_from_gallery).waitForExist()
            await $(this.choose_from_gallery).click()
            await $(this.photo_folder).waitForExist()
            const photo_folder0 = await $$(this.photo_folder)[0]
            await photo_folder0.click()
            await $(this.photo_item).waitForExist()
            const photo_item0 = await $$(this.photo_item)[0]
            await photo_item0.click()
        }
    }
}
module.exports = new Page()
