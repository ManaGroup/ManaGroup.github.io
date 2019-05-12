describe('first test with jest',()=>{
    it('should be defined and greater than zero size',()=>{
        
        expect([1,2,3]).toContain(1)
        expect([1,2,3][0]).toBe(1)
        expect([1,2,3][0]).toBeDefined()

    })
})

describe('my secound test case for strings', () => {
    it('should support strings converstion', () => {

        expect("ArashMidos").toContain('o')
        expect(['A','r','a','s','h','m','i','d','o','s']).toEqual(expect.arrayContaining([..."Arashmidos"]))

    })
})