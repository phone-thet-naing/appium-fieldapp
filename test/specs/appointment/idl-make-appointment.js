const MakeAppointmentHelper = require('../../utils/helpers/make-appointment.helper')
const appointmentClientList = require('../../data/input_data.json')['client_list_idl_interview']


describe('Make Interview Appointment', () => {
    it('Make Individual Interview Appointment', async () => {

        for (const desired_client of appointmentClientList) {
            await MakeAppointmentHelper.makeIndividualAppointment(desired_client)
        }
    })
})
