const ReactParticles = require('./umd/particles');
for (let key in ReactParticles) {
    ReactParticles.default[key] = ReactParticles[key];
}
module.exports = ReactParticles.default;