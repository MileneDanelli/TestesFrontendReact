const axios = require('axios')
jest.mock('axios')

describe("mock api calls", () => {

    afterEach(() => {
        jest.resetAllMocks();
    });

    test("mocking external endpoint in axios", () => {
        const mockedResponse = {data: {nome:'SAO', descricao:'Fantasia.'}}
        axios.get.mockResolvedValue(mockedResponse)
        const getAnimes = require('./getAnimes')
    
        getAnimes.getAnimes()

        expect(axios.get).toHaveBeenCalled()
        expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/animes')
    })
})