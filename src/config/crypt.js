import {AES, enc} from "crypto-js" 

export default {
    secret : "THESECRET",
    encrypt: function (clear) {
        let cypher = AES.encrypt(clear, this.secret)
        cypher = cypher.toString();
        return cypher
    },
    decrypt: function (cypher) {
        var decypher = AES.decrypt(cypher , this.secret)
        decypher = decypher.toString(enc.Utf8)
        return decypher
    }
}