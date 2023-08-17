class InterventionAssessment {
    get createNewFormBtn() {
        return $('//android.view.View[@content-desc=""]/android.view.View/android.widget.TextView')
    }
}

module.exports = new InterventionAssessment()