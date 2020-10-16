const request = require('supertest');


// beforeAll((done) => {
    it('tesing is server is running', (done) => {
        request(process.env.BASE_URL)
            .get('/testing123')
            .set('Accept', 'application/text')
            .expect("123")
            .end(function (err, res) {
                if (err) return done(err);
                done()
            });
    })
// })

describe('DDOS Testing.', () => {
    test('Running 100 sync requests', (done) => {
        for (i = 0; i < 100; i++) {
            request(process.env.BASE_URL)
                .get('/testing123')
                .set('Accept', 'application/text')
                .end(function (err, res) {
                    if (err) return done(err);
                    done()
                });
        }
        request(process.env.BASE_URL)
            .get('/testing123')
            .set('Accept', 'application/text')
            .expect(429)
            .end(function (err, res) {
                if (err) return done(err);
                done()
            });
    });

    it('Running 100 async requests', async (done) => {
        for (i = 0; i < 100; i++) {
            request("http://localhost:3000")
                .get('/testing123')
                .set('Accept', 'application/text')
                .end(function (err, res) {
                    if (err) return done(err);
                    done()
                });
        }
        request("http://localhost:3000")
            .get('/testing123')
            .set('Accept', 'application/text')
            .expect(429)
            .end(function (err, res) {
                if (err) return done(err);
                done()
            });
    })
});




// beforeEach(async function () {

//     const myAxios = await axios({
//         baseURL: "http://localhost:3000",
//     })

//     moxios.install(myAxios)
// })

// afterEach(function () {
//     // import and pass your custom axios instance to this method
//     moxios.uninstall()
// })


// it('just for a single spec', function (done) {
//     moxios.withMock(function () {
//         let onFulfilled = sinon.spy()
//         axios.get('/testing123').then(onFulfilled)

//         moxios.wait(function () {
//             let request = moxios.requests.mostRecent()
//             request.respondWith({
//                 status: 200
//             }).then(function () {
//                 strictEqual(onFulfilled.called, true)
//                 done()
//             })
//         })
//     })
// })