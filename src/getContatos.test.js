const axios = require('axios')
jest.mock('axios')

describe("mock api calls", () => {

    afterEach(() => {
        jest.resetAllMocks();
    });

    test("mocking external endpoint in axios", () => {
        const mockedResponse = {data: {nome:'Mi', email:'mi@outlook.com', telefone:'23423434'}}
        axios.get.mockResolvedValue(mockedResponse)
        const getC = require('./getContatos')
    
        getC.getContatos()

        expect(axios.get).toHaveBeenCalled()
        expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/contatos')
    })
})