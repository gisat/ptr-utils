import _ from 'lodash';

/**
 * Filter scopes by current url
 * @param scopes {Array}
 * @param url {string}
 * @returns {Array}
 */
const filterScopesByUrl = (scopes, url) => {
	if (scopes) {
		return _.filter(scopes, scope => {
			return scope.urls && scope.urls.includes(url);
		});
	} else {
		return [];
	}
};

export default {
	filterScopesByUrl,
};
