let testing = "{\"name\":\"Tim\",\"adminUser\":true,\"iss\":\"https://securetoken.google.com/easyportal-assessmentproj\",\"aud\":\"easyportal-assessmentproj\",\"auth_time\":1672784054,\"user_id\":\"SYIKQUs0yWbqSpaWLDqvaJtyj5M2\",\"sub\":\"SYIKQUs0yWbqSpaWLDqvaJtyj5M2\",\"iat\":1672784056,\"exp\":1672787656,\"email\":\"tim@admin.com\",\"email_verified\":true,\"firebase\":{\"identities\":{\"email\":[\"tim@admin.com\"]},\"sign_in_provider\":\"password\"}}"


// const testing2 = (JSON.parse(testing))

// console.log (testing2.adminUser)
// console.log("USERCLAIMS STORE is: ", testing.name)

const bla = "{\"firstName\":\"John\"}"
const parsed = JSON.parse(bla)
console.log(parsed)
console.log(parsed.firstName)

