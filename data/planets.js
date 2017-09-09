const planets = {
  Earth: {
    info: [
      {label: 'Mean distance from the sun (AU)', value: 1},
      {label: 'Diameter relative to earth (km)', value: 1},
      {label: 'Mass relative to earth', value: 1}
    ],
    description: "Earth is the largest and densest of the inner planets, the only one known to have current geological activity, and the only place where life is known to exist. Its liquid hydrosphere is unique among the terrestrial planets, and it is the only planet where plate tectonics has been observed. Earth's atmosphere is radically different from those of the other planets, having been altered by the presence of life to contain 21% free oxygen."
  },
  Neptune: {
    info: [
      {label: 'Mean distance from the sun (AU)', value: 30.06},
      {label: 'Diameter relative to earth (km)', value: 3.88},
      {label: 'Mass relative to earth', value: 17.23}
    ],
    description: "Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth and is slightly more massive than its near-twin Uranus, which is 15 times the mass of Earth and slightly larger than Neptune."
  },
  Jupiter: {
    info: [
      {label: 'Mean distance from the sun (AU)', value: 5.203},
      {label: 'Diameter relative to earth (km)', value: 11.19},
      {label: 'Mass relative to earth', value: 317.8}
    ],
    description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a giant planet with a mass one-thousandth that of the Sun, but two and a half times that of all the other planets in the Solar System combined. Jupiter and Saturn are gas giants; the other two giant planets, Uranus and Neptune are ice giants."
  },
  Mars: {
    info: [
      {label: 'Mean distance from the sun (AU)', value: 1.524},
      {label: 'Diameter relative to earth (km)', value: 0.532},
      {label: 'Mass relative to earth', value: 0.107}
    ],
    description: "Mars (1.5 AU from the Sun) is smaller than Earth and Venus (0.107 Earth masses). It has an atmosphere of mostly carbon dioxide with a surface pressure of 6.1 millibars (roughly 0.6% of that of Earth). Its surface, peppered with vast volcanoes, such as Olympus Mons, and rift valleys, such as Valles Marineris, shows geological activity that may have persisted until as recently as 2 million years ago. Its red colour comes from iron oxide (rust) in its soil. Mars has two tiny natural satellites (Deimos and Phobos) thought to be captured asteroids."
  },
  Saturn: {
    info: [
      {label: 'Mean distance from the sun (AU)', value: 9.529},
      {label: 'Diameter relative to earth (km)', value: 9.26},
      {label: 'Mass relative to earth', value: 95.3}
    ],
    description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. Although it has only one-eighth the average density of Earth, with its larger volume Saturn is just over 95 times more massive. Saturn is named after the Roman god of agriculture; its astronomical symbol (♄) represents the god's sickle."
  },
  Uranus: {
    info: [
      {label: 'Mean distance from the sun (AU)', value: 19.19},
      {label: 'Diameter relative to earth (km)', value: 4.01},
      {label: 'Mass relative to earth', value: 14.6}
    ],
    description: "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have different bulk chemical composition from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as 'ice giants' to distinguish them from the gas giants."
  },
  Mercury: {
    info: [
      {label: 'Mean distance from the sun (AU)', value: 0.387},
      {label: 'Diameter relative to earth (km)', value: 0.382},
      {label: 'Mass relative to earth', value: 0.055}
    ],
    description: "Mercury is the smallest planet in the Solar System. It is the closest planet to the sun. It makes one trip around the Sun once every 87.969 days. Mercury is bright when it is visible from Earth, ranging from −2.0 to 5.5 in apparent magnitude. It cannot be easily seen as it is usually too close to the Sun. Because Mercury is normally lost in the glare of the Sun (except during a solar eclipse), Mercury can only be seen in the morning or evening twilight."
  },
  Venus: {
    info: [
      {label: 'Mean distance from the sun (AU)', value: 0.723},
      {label: 'Diameter relative to earth (km)', value: 0.949},
      {label: 'Mass relative to earth', value: 0.815}
    ],
    description: "Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. It has the longest rotation period (243 days) of any planet in the Solar System and rotates in the opposite direction to most other planets. It has no natural satellites. It is named after the Roman goddess of love and beauty."
  },
  Moon: {
    info: [],
    description: "The Moon is an astronomical body that orbits planet Earth, being Earth's only permanent natural satellite. It is the fifth-largest natural satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits (its primary)."
  }
};

export default planets;