import auth from './auth';
import crudFetch from './crudFetch';
import crudResponse from './crudResponse';
import referenceFetch from './referenceFetch';

/**
 * @param {Object} restClient A REST object with two methods: fetch() and convertResponse()
 */
export default restClient => function* crudSaga() {
    yield [
        auth(),
        crudFetch(restClient)(),
        crudResponse(),
        referenceFetch(),
    ];
};
