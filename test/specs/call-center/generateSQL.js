function printSqlQueries(data) {
    // Sample data for the queries
    const interviewId = '62a42fc1-d5f3-4d3d-9d39-78ee8eb2bf43';
    const callCenterData = {
      callStatus: 2,
      callDate: '2023-03-27 00:00:00',
      remark: 'remark',
      uploadedBy: 'Phone Thet Naing',
    };
    const callCenterHistoryData = {
      areaNo: 'QA Testing',
      region: 'Region 1',
      office: 'Thein Phyu',
      clientId: '407396',
      // ... other properties
    };
  
    // Construct the SQL queries
    const insertCallCenterQuery = `
      INSERT INTO dp_call_center (id, interview_id, call_status, call_date, remark, uploaded_by, created_at, updated_at)
      VALUES (NULL, '${interviewId}', ${callCenterData.callStatus}, '${callCenterData.callDate}', '${callCenterData.remark}', '${callCenterData.uploadedBy}', NOW(), NOW());
    `;
  
    const insertCallCenterHistoryQuery = `
      INSERT INTO dp_call_center_history (id, interview_id, area_no, region, office, client_id, loan_id, group_name, phone_no1, phone_no2, success_call_phone_no, officer_name, client_name, father_name, nrc, ca_assessment_date, call_date, call_status, remark, uploaded_by, created_at, updated_at)
      VALUES (NULL, '${interviewId}', '${callCenterHistoryData.areaNo}', '${callCenterHistoryData.region}', '${callCenterHistoryData.office}', '${callCenterHistoryData.clientId}', 
             NULL, NULL, NULL, '-', '-', '${callCenterHistoryData.officerName}', '${callCenterHistoryData.clientName}', '${callCenterHistoryData.fatherName}', '${callCenterHistoryData.nrc}', 
             '2023-01-02 15:30:00', '2022-12-02 00:00:00', 2, 'remark', 'yezsl', '2022-12-16 16:13:22', NOW());
    `;
  
    // Print the queries
    console.log(insertCallCenterQuery);
    console.log(insertCallCenterHistoryQuery);
  }
  
  // Call the function
  printSqlQueries();
  