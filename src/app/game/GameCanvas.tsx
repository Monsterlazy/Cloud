{/* Animated Stars */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(300)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 4 + 3}s`
            }}
          />
        ))}
      </div>

      {/* Weather Effects */}
      {gameState.world.weatherSystem.current.type === 'aurora_storm' && (
        <div className="absolute inset-0">
          {/* Aurora Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/10 via-pink-500/10 to-yellow-500/10 animate-ping" />
        </div>
      )}

      {gameState.world.weatherSystem.current.type === 'void_mist' && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black/50 to-indigo-900/30" />
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-purple-600/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 20 + 10}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Screen Shake Effect */}
      <div 
        className={`absolute inset-0 ${screenShake > 0 ? 'animate-shake' : ''}`}
        style={{
          transform: screenShake > 0 ? `translate(${Math.random() * screenShake - screenShake/2}px, ${Math.random() * screenShake - screenShake/2}px)` : 'none'
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        
        .animate-shake {
          animation: shake 0.1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );

  const WindowManager = () => (
    <>
      {/* Character Window */}
      {gameState.ui.activeWindows.has('character') && (
        <div className="fixed top-20 left-20 w-96 h-[600px] bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl rounded-2xl border-2 border-blue-500/70 shadow-2xl z-30">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-blue-400">Character Stats</h3>
              <button 
                onClick={() => toggleWindow('character')}
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Strength:</span>
                  <span className="text-red-400 font-bold">{gameState.player.baseStats.strength.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Agility:</span>
                  <span className="text-green-400 font-bold">{gameState.player.baseStats.agility.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Intelligence:</span>
                  <span className="text-blue-400 font-bold">{gameState.player.baseStats.intelligence.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Vitality:</span>
                  <span className="text-purple-400 font-bold">{gameState.player.baseStats.vitality.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Luck:</span>
                  <span className="text-yellow-400 font-bold">{gameState.player.baseStats.luck.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Charisma:</span>
                  <span className="text-pink-400 font-bold">{gameState.player.baseStats.charisma.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Wisdom:</span>
                  <span className="text-cyan-400 font-bold">{gameState.player.baseStats.wisdom.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Endurance:</span>
                  <span className="text-orange-400 font-bold">{gameState.player.baseStats.endurance.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Perception:</span>
                  <span className="text-indigo-400 font-bold">{gameState.player.baseStats.perception.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Willpower:</span>
                  <span className="text-violet-400 font-bold">{gameState.player.baseStats.willpower.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <h4 className="text-lg font-bold text-yellow-400">Combat Stats</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Physical Attack:</span>
                    <span className="text-red-400">{gameState.player.derivedStats.attack.physical.min.toLocaleString()}-{gameState.player.derivedStats.attack.physical.max.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Magical Attack:</span>
                    <span className="text-blue-400">{gameState.player.derivedStats.attack.magical.min.toLocaleString()}-{gameState.player.derivedStats.attack.magical.max.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Critical Rate:</span>
                    <span className="text-yellow-400">{gameState.player.derivedStats.combat.critRate}%</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Physical Defense:</span>
                    <span className="text-green-400">{gameState.player.derivedStats.defense.physical.armor.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Magical Defense:</span>
                    <span className="text-cyan-400">{gameState.player.derivedStats.defense.magical.resistance.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Move Speed:</span>
                    <span className="text-purple-400">{gameState.player.derivedStats.combat.moveSpeed.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 space-y-2">
              <h4 className="text-lg font-bold text-purple-400">Special Powers</h4>
              <div className="grid grid-cols-1 gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Dragon Power:</span>
                  <span className="text-red-500 font-bold">{gameState.player.derivedStats.special.dragonPower.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Divine Blessing:</span>
                  <span className="text-yellow-500 font-bold">{gameState.player.derivedStats.special.divineBlessing.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Ancient Wisdom:</span>
                  <span className="text-cyan-500 font-bold">{gameState.player.derivedStats.special.ancientWisdom.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Void Mastery:</span>
                  <span className="text-purple-500 font-bold">{gameState.player.derivedStats.special.voidMastery.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Window */}
      {gameState.ui.activeWindows.has('skills') && (
        <div className="fixed top-20 right-20 w-[500px] h-[600px] bg-gradient-to-br from-black/95 via-purple-900/95 to-black/95 backdrop-blur-xl rounded-2xl border-2 border-purple-500/70 shadow-2xl z-30 overflow-hidden">
          <div className="p-4 h-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-purple-400">Skills & Abilities</h3>
              <button 
                onClick={() => toggleWindow('skills')}
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>
            
            <div className="h-[530px] overflow-y-auto space-y-3">
              {gameState.player.skills.activeSkills.map((skill) => (
                <div key={skill.id} className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-4 border border-gray-600/50 hover:border-purple-500/50 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className={`font-bold ${
                      skill.tier === 'cosmic' ? 'text-purple-400' :
                      skill.tier === 'transcendent' ? 'text-gold-400' :
                      skill.tier === 'mythic' ? 'text-red-400' :
                      skill.tier === 'legendary' ? 'text-orange-400' : 'text-blue-400'
                    }`}>
                      {skill.name}
                    </h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      skill.tier === 'cosmic' ? 'bg-purple-500/20 text-purple-300' :
                      skill.tier === 'transcendent' ? 'bg-yellow-500/20 text-yellow-300' :
                      skill.tier === 'mythic' ? 'bg-red-500/20 text-red-300' :
                      skill.tier === 'legendary' ? 'bg-orange-500/20 text-orange-300' : 'bg-blue-500/20 text-blue-300'
                    }`}>
                      {skill.tier}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-300 mb-3">{skill.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-gray-400">Element: <span className={`font-semibold ${
                        skill.element === 'fire' ? 'text-red-400' :
                        skill.element === 'ice' ? 'text-blue-400' :
                        skill.element === 'void' ? 'text-purple-400' :
                        skill.element === 'dragon' ? 'text-orange-400' :
                        skill.element === 'divine' ? 'text-yellow-400' :
                        skill.element === 'cosmic' ? 'text-cyan-400' : 'text-gray-400'
                      }`}>{skill.element}</span></div>
                      <div className="text-gray-400">Type: <span className="text-white">{skill.type}</span></div>
                      {skill.damage && (
                        <div className="text-gray-400">Damage: <span className="text-red-400 font-bold">{skill.damage.min?.toLocaleString()}-{skill.damage.max?.toLocaleString()}</span></div>
                      )}
                    </div>
                    <div>
                      <div className="text-gray-400">Cooldown: <span className="text-blue-400">{skill.cooldown}s</span></div>
                      <div className="text-gray-400">Cost: 
                        {skill.cost.mp && <span className="text-blue-400 ml-1">{skill.cost.mp} MP</span>}
                        {skill.cost.sp && <span className="text-green-400 ml-1">{skill.cost.sp} SP</span>}
                        {skill.cost.energy && <span className="text-purple-400 ml-1">{skill.cost.energy} Energy</span>}
                      </div>
                      {skill.range && (
                        <div className="text-gray-400">Range: <span className="text-cyan-400">{skill.range}</span></div>
                      )}
                    </div>
                  </div>
                  
                  {skill.effects && skill.effects.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-600/30">
                      <div className="text-xs text-gray-400 mb-1">Effects:</div>
                      <div className="flex flex-wrap gap-1">
                        {skill.effects.map((effect, index) => (
                          <span key={index} className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">
                            {effect}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Inventory Window */}
      {gameState.ui.activeWindows.has('inventory') && (
        <div className="fixed top-10 left-1/2 transform -translate-x-1/2 w-[800px] h-[700px] bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl rounded-2xl border-2 border-green-500/70 shadow-2xl z-30">
          <div className="p-4 h-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-green-400">Inventory</h3>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-400">
                  {gameState.inventory.capacity.used}/{gameState.inventory.capacity.total}
                </span>
                <button 
                  onClick={() => toggleWindow('inventory')}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            {/* Inventory Tabs */}
            <div className="flex gap-2 mb-4 border-b border-gray-600/50 pb-2">
              {gameState.inventory.organization.tabs.map((tab) => (
                <button
                  key={tab}
                  className="px-3 py-1 text-sm rounded-lg bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white transition-all"
                >
                  {tab}
                </button>
              ))}
            </div>
            
            {/* Item Grid */}
            <div className="h-[580px] overflow-y-auto">
              <div className="grid grid-cols-8 gap-2">
                {gameState.inventory.items.map((item) => (
                  <div
                    key={item.id}
                    className={`relative aspect-square bg-gradient-to-br ${
                      item.rarity === 'beyond_artifact' ? 'from-purple-600/20 to-pink-600/20 border-2 border-purple-500' :
                      item.rarity === 'cosmic_unique' ? 'from-cyan-600/20 to-blue-600/20 border-2 border-cyan-500' :
                      item.rarity === 'unique_cosmic' ? 'from-yellow-600/20 to-orange-600/20 border-2 border-yellow-500' :
                      item.rarity === 'beyond_legendary' ? 'from-red-600/20 to-orange-600/20 border-2 border-red-500' :
                      item.rarity === 'legendary' ? 'from-orange-500/20 to-yellow-500/20 border border-orange-500' :
                      item.rarity === 'epic' ? 'from-purple-500/20 to-blue-500/20 border border-purple-500' :
                      item.rarity === 'rare' ? 'from-blue-500/20 to-cyan-500/20 border border-blue-500' :
                      'from-gray-600/20 to-gray-500/20 border border-gray-500'
                    } rounded-lg p-2 cursor-pointer hover:scale-105 transition-transform group`}
                    title={item.name}
                  >
                    {/* Item Icon */}
                    <div className="w-full h-full flex items-center justify-center text-2xl">
                      {item.type === 'weapon' ? '⚔️' :
                       item.type === 'armor' ? '🛡️' :
                       item.type === 'consumable' ? '🧪' :
                       item.type === 'material' ? '💎' : '📦'}
                    </div>
                    
                    {/* Quantity */}
                    {item.quantity > 1 && (
                      <div className="absolute bottom-0 right-0 bg-black/80 text-white text-xs px-1 rounded-tl-lg">
                        {item.quantity}
                      </div>
                    )}
                    
                    {/* Enhancement Level */}
                    {item.name.includes('+') && (
                      <div className="absolute top-0 left-0 bg-yellow-500/80 text-black text-xs px-1 rounded-br-lg font-bold">
                        +{item.name.match(/\+(\d+)/)?.[1] || '0'}
                      </div>
                    )}
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                      <div className="bg-black/95 text-white p-3 rounded-lg text-xs min-w-64 border border-gray-600">
                        <div className={`font-bold mb-1 ${
                          item.rarity === 'beyond_artifact' ? 'text-purple-400' :
                          item.rarity === 'cosmic_unique' ? 'text-cyan-400' :
                          item.rarity === 'unique_cosmic' ? 'text-yellow-400' :
                          item.rarity === 'beyond_legendary' ? 'text-red-400' :
                          item.rarity === 'legendary' ? 'text-orange-400' :
                          item.rarity === 'epic' ? 'text-purple-400' :
                          item.rarity === 'rare' ? 'text-blue-400' : 'text-white'
                        }`}>
                          {item.name}
                        </div>
                        
                        <div className="text-gray-300 mb-2">{item.description || 'No description available'}</div>
                        
                        {item.stats && (
                          <div className="mb-2">
                            {Object.entries(item.stats).map(([stat, value]) => (
                              <div key={stat} className="text-green-400">
                                {stat}: {typeof value === 'object' ? 
                                  (value.min && value.max ? `${value.min.toLocaleString()}-${value.max.toLocaleString()}` : 
                                   JSON.stringify(value)) : 
                                  value.toLocaleString()}
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {item.enchantments && item.enchantments.length > 0 && (
                          <div className="mb-2">
                            <div className="text-purple-400 font-semibold">Enchantments:</div>
                            {item.enchantments.map((ench, index) => (
                              <div key={index} className="text-purple-300 text-xs">
                                • {ench.name} ({ench.level}): {ench.effect}
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {item.market_value && (
                          <div className="text-yellow-400">
                            Value: {item.market_value.toLocaleString()} Gold
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Empty Slots */}
                {Array.from({ length: Math.max(0, 64 - gameState.inventory.items.length) }).map((_, index) => (
                  <div
                    key={`empty-${index}`}
                    className="aspect-square bg-gray-800/30 border border-gray-600/30 rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Guild Window */}
      {gameState.ui.activeWindows.has('guild') && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-br from-black/95 via-blue-900/95 to-black/95 backdrop-blur-xl rounded-2xl border-2 border-blue-500/70 shadow-2xl z-30">
          <div className="p-6 h-full">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-400">{gameState.player.guild.name}</h3>
                <p className="text-sm text-gray-400">Level {gameState.player.guild.level} • {gameState.player.guild.tier} Guild</p>
              </div>
              <button 
                onClick={() => toggleWindow('guild')}
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-6 h-[500px]">
              {/* Guild Info */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-800/30 to-purple-800/30 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-cyan-400 mb-3">Alliances</h4>
                  <div className="space-y-1">
                    {gameState.player.guild.alliances.map((alliance, index) => (
                      <div key={index} className="text-cyan-300 text-sm">• {alliance}</div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-red-800/30 to-pink-800/30 rounded-xl p-4 h-32 overflow-y-auto">
                  <h4 className="text-lg font-bold text-red-400 mb-3">Rival Guilds</h4>
                  <div className="space-y-1">
                    {gameState.player.guild.rivals.map((rival, index) => (
                      <div key={index} className="text-red-300 text-sm">• {rival}</div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-800/30 to-orange-800/30 rounded-xl p-4 h-24 overflow-y-auto">
                  <h4 className="text-lg font-bold text-yellow-400 mb-3">Achievements</h4>
                  <div className="space-y-1">
                    {gameState.player.guild.achievements.slice(0, 2).map((achievement, index) => (
                      <div key={index} className="text-yellow-300 text-xs">🏆 {achievement}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );

  const GameWorld = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dynamic Background based on current realm */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        {/* Terrain features */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.2) 0%, transparent 70%)
          `
        }} />
      </div>

      {/* Floating landmarks */}
      <div className="absolute" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
        <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-pulse flex items-center justify-center shadow-2xl">
          <Castle className="w-16 h-16 text-white" />
        </div>
        <div className="text-center mt-2 text-yellow-400 font-bold text-sm">Ancient Dragon God Temple</div>
      </div>

      <div className="absolute" style={{ left: '20%', top: '80%', transform: 'translate(-50%, -50%)' }}>
        <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full opacity-70 animate-pulse flex items-center justify-center shadow-xl">
          <Eye className="w-12 h-12 text-white" />
        </div>
        <div className="text-center mt-2 text-purple-400 font-bold text-xs">Void Convergence</div>
      </div>

      <div className="absolute" style={{ left: '70%', top: '30%', transform: 'translate(-50%, -50%)' }}>
        <div className="w-28 h-28 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-75 animate-bounce flex items-center justify-center shadow-xl">
          <Gem className="w-14 h-14 text-white" />
        </div>
        <div className="text-center mt-2 text-cyan-400 font-bold text-xs">Crystal Forest</div>
      </div>

      {/* Player character */}
      <div 
        className="absolute w-8 h-8 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full border-4 border-white shadow-lg z-10 transition-all duration-200"
        style={{
          left: `${(gameState.player.position.x / 50000) * 100}%`,
          top: `${(gameState.player.position.y / 50000) * 100}%`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Crown className="w-full h-full text-white p-1" />
      </div>

      {/* Active skill effects */}
      {activeEffects.map((effect) => (
        <div
          key={effect.id}
          className={`absolute pointer-events-none z-20 ${
            effect.tier === 'cosmic' ? 'animate-ping' :
            effect.tier === 'transcendent' ? 'animate-pulse' :
            'animate-bounce'
          }`}
          style={{
            left: `${(effect.position.x / 50000) * 100}%`,
            top: `${(effect.position.y / 50000) * 100}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className={`w-32 h-32 rounded-full ${
            effect.skill.element === 'fire' ? 'bg-gradient-to-br from-red-400 to-orange-600' :
            effect.skill.element === 'ice' ? 'bg-gradient-to-br from-blue-400 to-cyan-600' :
            effect.skill.element === 'void' ? 'bg-gradient-to-br from-purple-400 to-indigo-600' :
            effect.skill.element === 'dragon' ? 'bg-gradient-to-br from-red-500 to-yellow-500' :
            effect.skill.element === 'divine' ? 'bg-gradient-to-br from-yellow-400 to-white' :
            effect.skill.element === 'cosmic' ? 'bg-gradient-to-br from-purple-500 to-pink-500' :
            'bg-gradient-to-br from-blue-400 to-purple-600'
          } opacity-70 flex items-center justify-center shadow-2xl`}>
            <div className="text-4xl">
              {effect.skill.element === 'fire' ? '🔥' :
               effect.skill.element === 'ice' ? '❄️' :
               effect.skill.element === 'void' ? '🌌' :
               effect.skill.element === 'dragon' ? '🐲' :
               effect.skill.element === 'divine' ? '✨' :
               effect.skill.element === 'cosmic' ? '⭐' :
               effect.skill.element === 'phoenix' ? '🔥' :
               effect.skill.element === 'chaos' ? '💥' : '⚡'}
            </div>
          </div>
          
          {/* Area effect visualization */}
          {effect.skill.areaEffect && (
            <div 
              className={`absolute inset-0 rounded-full border-4 ${
                effect.skill.element === 'fire' ? 'border-red-400' :
                effect.skill.element === 'ice' ? 'border-blue-400' :
                effect.skill.element === 'void' ? 'border-purple-400' :
                'border-yellow-400'
              } opacity-50 animate-ping`}
              style={{
                width: `${effect.skill.areaEffect.radius / 10}px`,
                height: `${effect.skill.areaEffect.radius / 10}px`,
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%'
              }}
            />
          )}
        </div>
      ))}
    </div>
  );

  const ControlsHelper = () => (
    <div className="fixed bottom-4 left-4 bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 backdrop-blur-xl rounded-xl border border-gray-600/50 p-3 text-xs text-gray-300 shadow-xl max-w-xs">
      <h4 className="text-white font-bold mb-2">Controls</h4>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <div className="text-yellow-400">Movement:</div>
          <div>WASD / Arrows</div>
          <div>Shift + Move = Sprint</div>
          <div className="text-blue-400 mt-1">Skills:</div>
          <div>1-9 = Use Skills</div>
        </div>
        <div>
          <div className="text-green-400">Windows:</div>
          <div>I = Inventory</div>
          <div>C = Character</div>
          <div>K = Skills</div>
          <div>G = Guild</div>
          <div>ESC = Close All</div>
        </div>
      </div>
    </div>
  );

  const EventNotifications = () => (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
      {gameState.world.globalEvents.active.length > 0 && (
        <div className="bg-gradient-to-r from-purple-900/95 via-pink-900/95 to-purple-900/95 backdrop-blur-xl rounded-2xl border-4 border-purple-400 p-6 text-center shadow-2xl animate-pulse">
          <div className="text-3xl mb-2">🌟</div>
          <h3 className="text-2xl font-bold text-purple-400 mb-2">GLOBAL EVENT ACTIVE</h3>
          <div className="text-xl text-white mb-2">{gameState.world.globalEvents.active[0].name}</div>
          <div className="text-yellow-400">+{gameState.world.globalEvents.active[0].effects.global[1]} • {gameState.world.globalEvents.active[0].participants.toLocaleString()} participants</div>
        </div>
      )}
    </div>
  );

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden select-none font-sans">
      {/* Background Effects */}
      <BackgroundEffects />
      
      {/* Game World */}
      <GameWorld />
      
      {/* Main UI Elements */}
      <PlayerStatusPanel />
      <ResourceDisplay />
      <RegionDisplay />
      <TimeAndWeatherDisplay />
      <SkillHotbar />
      <MiniMap />
      
      {/* Dynamic Systems */}
      <NotificationSystem />
      <DamageNumberSystem />
      <EventNotifications />
      
      {/* Window Manager */}
      <WindowManager />
      
      {/* Helper UI */}
      <ControlsHelper />
      
      {/* Loading/Transition Effects */}
      {screenShake > 0 && (
        <div className="fixed inset-0 bg-white/10 animate-pulse pointer-events-none z-40" />
      )}
    </div>
  );
};

export default UltimateRPGGame;blue-400 mb-3">Guild Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Your Rank:</span>
                      <span className="text-yellow-400 font-bold">{gameState.player.guild.rank}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total Members:</span>
                      <span className="text-green-400">{gameState.player.guild.members.total}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Online:</span>
                      <span className="text-green-400">{gameState.player.guild.members.online}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Territory:</span>
                      <span className="text-purple-400">{gameState.player.guild.territory.totalSize.toLocaleString()} km²</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-red-800/30 to-orange-800/30 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-red-400 mb-3">War Statistics</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Active Wars:</span>
                      <span className="text-red-400 font-bold">{gameState.player.guild.wars.active}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Wars Won:</span>
                      <span className="text-green-400">{gameState.player.guild.wars.won}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Wars Lost:</span>
                      <span className="text-red-400">{gameState.player.guild.wars.lost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Win Rate:</span>
                      <span className="text-yellow-400">{Math.round((gameState.player.guild.wars.won / (gameState.player.guild.wars.won + gameState.player.guild.wars.lost)) * 100)}%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-purple-400 mb-3">Guild Power</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Military:</span>
                      <span className="text-red-400">{gameState.player.guild.power.military.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Economic:</span>
                      <span className="text-yellow-400">{gameState.player.guild.power.economic.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Magical:</span>
                      <span className="text-blue-400">{gameState.player.guild.power.magical.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Territories and Alliances */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-800/30 to-teal-800/30 rounded-xl p-4 h-48 overflow-y-auto">
                  <h4 className="text-lg font-bold text-green-400 mb-3">Conquered Territories</h4>
                  <div className="space-y-2">
                    <div className="text-yellow-400 font-semibold text-sm">{gameState.player.guild.territory.main}</div>
                    {gameState.player.guild.territory.conquered.map((territory, index) => (
                      <div key={index} className="text-green-300 text-sm">• {territory}</div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-cyan-800/30 to-blue-800/30 rounded-xl p-4 h-32 overflow-y-auto">
                  <h4 className="text-lg font-bold text-            style={{ width: `${(gameState.player.derivedStats.hp.current / gameState.player.derivedStats.hp.max) * 100}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white drop-shadow-lg">
            {Math.floor((gameState.player.derivedStats.hp.current / gameState.player.derivedStats.hp.max) * 100)}%
          </div>
        </div>
      </div>

      {/* Mana Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-blue-400 font-semibold flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Mana
          </span>
          <span className="text-white font-mono">
            {Math.floor(gameState.player.derivedStats.mp.current).toLocaleString()} / {gameState.player.derivedStats.mp.max.toLocaleString()}
          </span>
        </div>
        <div className="relative w-full bg-gray-800/80 rounded-full h-5 overflow-hidden border border-blue-500/30">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 transition-all duration-300 shadow-inner"
            style={{ width: `${(gameState.player.derivedStats.mp.current / gameState.player.derivedStats.mp.max) * 100}%` }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white drop-shadow-lg">
            {Math.floor((gameState.player.derivedStats.mp.current / gameState.player.derivedStats.mp.max) * 100)}%
          </div>
        </div>
      </div>

      {/* Stamina Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-green-400 font-semibold flex items-center gap-2">
            <Activity className="w-4 h-4" />
            Stamina
          </span>
          <span className="text-white font-mono">
            {Math.floor(gameState.player.derivedStats.sp.current).toLocaleString()} / {gameState.player.derivedStats.sp.max.toLocaleString()}
          </span>
        </div>
        <div className="relative w-full bg-gray-800/80 rounded-full h-5 overflow-hidden border border-green-500/30">
          <div 
            className="h-full bg-gradient-to-r from-green-600 via-lime-500 to-green-400 transition-all duration-300 shadow-inner"
            style={{ width: `${(gameState.player.derivedStats.sp.current / gameState.player.derivedStats.sp.max) * 100}%` }}
          />
        </div>
      </div>

      {/* Energy Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-purple-400 font-semibold flex items-center gap-2">
            <Lightning className="w-4 h-4" />
            Energy
          </span>
          <span className="text-white font-mono">
            {Math.floor(gameState.player.derivedStats.energy.current).toLocaleString()} / {gameState.player.derivedStats.energy.max.toLocaleString()}
          </span>
        </div>
        <div className="relative w-full bg-gray-800/80 rounded-full h-5 overflow-hidden border border-purple-500/30">
          <div 
            className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 transition-all duration-300 shadow-inner"
            style={{ width: `${(gameState.player.derivedStats.energy.current / gameState.player.derivedStats.energy.max) * 100}%` }}
          />
        </div>
      </div>

      {/* Experience Bar */}
      <div>
        <div className="flex justify-between text-sm mb-1">
          <span className="text-yellow-400 font-semibold flex items-center gap-2">
            <Star className="w-4 h-4" />
            Experience
          </span>
          <span className="text-white font-mono">
            {gameState.player.experience.toLocaleString()} / {gameState.player.experienceToNext.toLocaleString()}
          </span>
        </div>
        <div className="relative w-full bg-gray-800/80 rounded-full h-5 overflow-hidden border border-yellow-500/30">
          <div 
            className="h-full bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-400 transition-all duration-300 shadow-inner"
            style={{ width: `${(gameState.player.experience / gameState.player.experienceToNext) * 100}%` }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white drop-shadow-lg">
            {Math.floor((gameState.player.experience / gameState.player.experienceToNext) * 100)}%
          </div>
        </div>
        <div className="text-xs text-gray-400 mt-1">
          Total EXP: {gameState.player.totalExperience.toLocaleString()}
        </div>
      </div>
    </div>
  );

  const ResourceDisplay = () => (
    <div className="fixed top-4 right-4 bg-gradient-to-br from-black/95 via-purple-900/90 to-indigo-900/90 backdrop-blur-xl rounded-2xl border-2 border-purple-500/70 p-4 shadow-2xl min-w-[350px]">
      <div className="grid grid-cols-2 gap-6">
        {/* Primary Resources */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-purple-400 mb-3 border-b border-purple-500/30 pb-1">Primary</h4>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <Coins className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-yellow-400 font-mono text-sm">
                {gameState.player.resources.primary.gold.toLocaleString()}
              </div>
              <div className="text-xs text-gray-400">Gold</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg flex items-center justify-center">
              <Coins className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-gray-300 font-mono text-sm">
                {gameState.player.resources.primary.platinum.toLocaleString()}
              </div>
              <div className="text-xs text-gray-400">Platinum</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <Gem className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-blue-400 font-mono text-sm">
                {gameState.player.resources.primary.gems.toLocaleString()}
              </div>
              <div className="text-xs text-gray-400">Gems</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-purple-400 font-mono text-sm">
                {gameState.player.resources.primary.crystals.toLocaleString()}
              </div>
              <div className="text-xs text-gray-400">Crystals</div>
            </div>
          </div>
        </div>
        
        {/* Rare Resources */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-orange-400 mb-3 border-b border-orange-500/30 pb-1">Rare</h4>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-cyan-400 font-mono text-sm">
                {gameState.player.resources.primary.essence.toLocaleString()}
              </div>
              <div className="text-xs text-gray-400">Essence</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center">
              <Skull className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-red-400 font-mono text-sm">
                {gameState.player.resources.primary.souls.toLocaleString()}
              </div>
              <div className="text-xs text-gray-400">Souls</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-pink-400 font-mono text-sm">
                {gameState.player.resources.rare.voidFragments}
              </div>
              <div className="text-xs text-gray-400">Void Fragments</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Sun className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-yellow-500 font-mono text-sm">
                {gameState.player.resources.primary.divinity.toLocaleString()}
              </div>
              <div className="text-xs text-gray-400">Divinity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const RegionDisplay = () => {
    const currentRealm = gameState.world.universes.prime_reality.dimensions.material_plane.realms[gameState.player.currentRegion];
    if (!currentRealm) return null;
    
    return (
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-black/95 via-cyan-900/90 to-blue-900/90 backdrop-blur-xl rounded-2xl border-2 border-cyan-500/70 px-6 py-4 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center">
            <TreePine className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-cyan-400 text-lg">{currentRealm.name}</h4>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-300">Level {currentRealm.levelRange.min}-{currentRealm.levelRange.max}</span>
              <span className="text-yellow-400">{'★'.repeat(currentRealm.dangerLevel)}</span>
              <span className="text-blue-300 capitalize">{gameState.world.weatherSystem.current.type}</span>
              <span className="text-purple-300">{currentRealm.tier}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const TimeAndWeatherDisplay = () => {
    const formatTime = (time) => {
      const hours = Math.floor(time);
      const minutes = Math.floor((time - hours) * 60);
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    };

    const getTimeIcon = (phase) => {
      switch(phase) {
        case 'cosmic_dawn': return <Sun className="w-5 h-5 text-orange-400" />;
        case 'dragon_morning': return <Sun className="w-5 h-5 text-yellow-400" />;
        case 'golden_afternoon': return <Sun className="w-5 h-5 text-yellow-500" />;
        case 'phoenix_evening': return <Sun className="w-5 h-5 text-orange-500" />;
        case 'void_night': return <Moon className="w-5 h-5 text-purple-300" />;
        case 'reality_midnight': return <Moon className="w-5 h-5 text-blue-300" />;
        case 'dream_hour': return <Moon className="w-5 h-5 text-indigo-400" />;
        default: return <Sun className="w-5 h-5 text-yellow-400" />;
      }
    };

    const getWeatherIcon = (weather) => {
      switch(weather) {
        case 'sunny': return <Sun className="w-5 h-5 text-yellow-400" />;
        case 'cloudy': return <CloudRain className="w-5 h-5 text-gray-400" />;
        case 'rain': return <CloudRain className="w-5 h-5 text-blue-400" />;
        case 'storm': return <Lightning className="w-5 h-5 text-purple-400" />;
        case 'aurora_storm': return <Sparkles className="w-5 h-5 text-cyan-400" />;
        case 'void_mist': return <Eye className="w-5 h-5 text-purple-600" />;
        case 'dragon_winds': return <Wind className="w-5 h-5 text-red-400" />;
        default: return <Sun className="w-5 h-5 text-yellow-400" />;
      }
    };

    return (
      <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-black/95 via-indigo-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border-2 border-indigo-500/70 px-4 py-3 shadow-2xl">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            {getTimeIcon(gameState.world.timeSystem.phases.current)}
            <span className="text-white font-mono font-bold">
              {formatTime(gameState.world.timeSystem.currentTime)}
            </span>
            <span className="text-sm text-gray-400 capitalize">
              {gameState.world.timeSystem.phases.current.replace('_', ' ')}
            </span>
          </div>
          
          <div className="w-px h-6 bg-gray-600" />
          
          <div className="flex items-center gap-2">
            {getWeatherIcon(gameState.world.weatherSystem.current.type)}
            <span className="text-blue-300 capitalize font-semibold">
              {gameState.world.weatherSystem.current.type.replace('_', ' ')}
            </span>
            <span className="text-xs text-gray-400 capitalize">
              ({gameState.world.weatherSystem.current.intensity})
            </span>
          </div>
          
          <div className="w-px h-6 bg-gray-600" />
          
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-green-400" />
            <span className="text-green-300 text-sm">
              Day {gameState.world.timeSystem.calendar.currentDay}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const SkillHotbar = () => (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl rounded-2xl border-2 border-yellow-500/70 p-3 shadow-2xl">
      <div className="flex items-center gap-3">
        {gameState.player.skills.activeSkills.slice(0, 9).map((skill, index) => {
          const isOnCooldown = gameState.player.skills.cooldowns.has(skill.id);
          const cooldownTime = isOnCooldown ? Math.ceil(gameState.player.skills.cooldowns.get(skill.id) / 1000) : 0;
          
          return (
            <div 
              key={skill.id} 
              className={`relative w-14 h-14 rounded-xl border-2 ${
                isOnCooldown 
                  ? 'border-gray-600 bg-gray-800/80' 
                  : `border-${skill.element === 'fire' ? 'red' : skill.element === 'ice' ? 'blue' : skill.element === 'void' ? 'purple' : 'yellow'}-500 bg-gradient-to-br from-${skill.element === 'fire' ? 'red' : skill.element === 'ice' ? 'blue' : skill.element === 'void' ? 'purple' : 'yellow'}-500/20 to-${skill.element === 'fire' ? 'red' : skill.element === 'ice' ? 'blue' : skill.element === 'void' ? 'purple' : 'yellow'}-600/40 hover:from-${skill.element === 'fire' ? 'red' : skill.element === 'ice' ? 'blue' : skill.element === 'void' ? 'purple' : 'yellow'}-400/30 to-${skill.element === 'fire' ? 'red' : skill.element === 'ice' ? 'blue' : skill.element === 'void' ? 'purple' : 'yellow'}-500/50`
              } cursor-pointer transition-all duration-200 flex items-center justify-center group`}
              onClick={() => !isOnCooldown && useAdvancedSkill(skill.id)}
              title={skill.name}
            >
              {/* Skill Icon */}
              <div className={`text-2xl ${isOnCooldown ? 'text-gray-500' : `text-${skill.element === 'fire' ? 'red' : skill.element === 'ice' ? 'blue' : skill.element === 'void' ? 'purple' : 'yellow'}-400`}`}>
                {skill.element === 'fire' ? '🔥' : 
                 skill.element === 'ice' ? '❄️' : 
                 skill.element === 'void' ? '🌌' : 
                 skill.element === 'dragon' ? '🐲' : 
                 skill.element === 'divine' ? '✨' : 
                 skill.element === 'cosmic' ? '⭐' : 
                 skill.element === 'phoenix' ? '🔥' : 
                 skill.element === 'chaos' ? '💥' : '⚔️'}
              </div>
              
              {/* Hotkey Number */}
              <div className="absolute -top-1 -left-1 bg-black/80 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold border border-gray-600">
                {index + 1}
              </div>
              
              {/* Cooldown Overlay */}
              {isOnCooldown && (
                <div className="absolute inset-0 bg-black/60 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{cooldownTime}s</span>
                </div>
              )}
              
              {/* Tier Indicator */}
              <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full ${
                skill.tier === 'cosmic' ? 'bg-purple-500' :
                skill.tier === 'transcendent' ? 'bg-gold-500' :
                skill.tier === 'mythic' ? 'bg-red-500' :
                skill.tier === 'legendary' ? 'bg-orange-500' : 'bg-blue-500'
              } border border-white/50`} />
              
              {/* Hover Tooltip */}
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black/95 text-white p-3 rounded-lg text-xs min-w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 border border-gray-600">
                <div className="font-bold text-yellow-400">{skill.name}</div>
                <div className="text-gray-300 mb-1">{skill.description}</div>
                <div className="text-xs">
                  <div className="text-green-400">Damage: {skill.damage?.min?.toLocaleString()}-{skill.damage?.max?.toLocaleString()}</div>
                  <div className="text-blue-400">Cost: {skill.cost.mp ? `${skill.cost.mp} MP` : ''} {skill.cost.sp ? `${skill.cost.sp} SP` : ''} {skill.cost.energy ? `${skill.cost.energy} Energy` : ''}</div>
                  <div className="text-purple-400">Cooldown: {skill.cooldown}s</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const MiniMap = () => (
    <div className="fixed bottom-4 right-4 w-64 h-64 bg-gradient-to-br from-black/95 via-gray-900/90 to-black/95 backdrop-blur-xl rounded-2xl border-2 border-green-500/70 p-3 shadow-2xl">
      <div className="relative w-full h-full bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-xl overflow-hidden border border-green-500/30">
        {/* Map Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/20 via-teal-700/20 to-cyan-800/20" />
        
        {/* Player Position */}
        <div 
          className="absolute w-3 h-3 bg-yellow-400 rounded-full border-2 border-white shadow-lg animate-pulse"
          style={{
            left: `${(gameState.player.position.x / 50000) * 100}%`,
            top: `${(gameState.player.position.y / 50000) * 100}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        
        {/* Landmarks */}
        <div 
          className="absolute w-2 h-2 bg-red-500 rounded-full"
          style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
          title="Ancient Dragon God Temple"
        />
        
        <div 
          className="absolute w-2 h-2 bg-purple-500 rounded-full"
          style={{ left: '20%', top: '80%', transform: 'translate(-50%, -50%)' }}
          title="Void Convergence Point"
        />
        
        <div 
          className="absolute w-2 h-2 bg-cyan-500 rounded-full"
          style={{ left: '70%', top: '30%', transform: 'translate(-50%, -50%)' }}
          title="Infinity Crystal Forest"
        />
        
        {/* Map Title */}
        <div className="absolute top-1 left-1 text-xs text-green-400 font-bold">
          {gameState.world.universes.prime_reality.dimensions.material_plane.realms[gameState.player.currentRegion]?.name || 'Unknown'}
        </div>
        
        {/* Coordinates */}
        <div className="absolute bottom-1 right-1 text-xs text-gray-400 font-mono">
          {Math.floor(gameState.player.position.x)}, {Math.floor(gameState.player.position.y)}, {Math.floor(gameState.player.position.z)}
        </div>
      </div>
    </div>
  );

  const NotificationSystem = () => (
    <div className="fixed top-20 right-20 space-y-2 z-50 max-w-md">
      {gameState.ui.notifications.queue.slice(0, 5).map((notification) => (
        <div
          key={notification.id}
          className={`p-4 rounded-lg border backdrop-blur-xl shadow-xl transform transition-all duration-300 ${
            notification.type === 'success' ? 'bg-green-900/80 border-green-500/70 text-green-300' :
            notification.type === 'error' ? 'bg-red-900/80 border-red-500/70 text-red-300' :
            notification.type === 'warning' ? 'bg-yellow-900/80 border-yellow-500/70 text-yellow-300' :
            'bg-blue-900/80 border-blue-500/70 text-blue-300'
          } ${
            notification.tier === 'legendary' ? 'border-4 animate-pulse shadow-2xl' :
            notification.tier === 'high' ? 'border-2' : 'border'
          }`}
          style={{
            animation: notification.animation === 'slide_in' ? 'slideInRight 0.3s ease-out' : undefined
          }}
        >
          <div className="flex items-center gap-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              notification.type === 'success' ? 'bg-green-500' :
              notification.type === 'error' ? 'bg-red-500' :
              notification.type === 'warning' ? 'bg-yellow-500' :
              'bg-blue-500'
            }`}>
              {notification.type === 'success' ? <CheckCircle className="w-4 h-4 text-white" /> :
               notification.type === 'error' ? <XCircle className="w-4 h-4 text-white" /> :
               notification.type === 'warning' ? <AlertTriangle className="w-4 h-4 text-white" /> :
               <Info className="w-4 h-4 text-white" />}
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold">{notification.message}</div>
              {notification.tier === 'legendary' && (
                <div className="text-xs text-gray-400 mt-1">Legendary Event!</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const DamageNumberSystem = () => (
    <>
      {damageNumbers.map((dmg) => (
        <div
          key={dmg.id}
          className={`fixed pointer-events-none z-40 font-bold animate-bounce select-none ${
            dmg.critical ? 'text-4xl text-red-400' : 'text-2xl'
          } ${
            dmg.type === 'skill_damage' ? 'text-purple-400' :
            dmg.type === 'incoming_damage' ? 'text-red-400' :
            dmg.type === 'outgoing_damage' ? 'text-yellow-400' :
            'text-white'
          }`}
          style={{
            left: `${dmg.position.x}px`,
            top: `${dmg.position.y}px`,
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
            animation: `floatUp 2s ease-out, fadeOut 2s ease-out`
          }}
        >
          {dmg.critical && '💥 '}
          {dmg.damage.toLocaleString()}
          {dmg.critical && ' CRIT!'}
        </div>
      ))}
      
      <style jsx>{`
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100px); opacity: 0; }
        }
        
        @keyframes fadeOut {
          0% { opacity: 1; }
          70% { opacity: 1; }
          100% { opacity: 0; }
        }
        
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </>
  );

  const BackgroundEffects = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated Stars */}
      <div className="absolute inset-0 opacity-40">import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { 
  ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Sword, Shield, Heart, Zap, Star, Crown, Gem, Coins, 
  MapPin, Users, MessageSquare, Package, Settings, Flame, Snowflake, Mountain, TreePine, Skull, Eye, 
  Feather, Book, Trophy, Target, Clock, Wand2, Sparkles, Swords, Crosshair, Plus, Minus, RotateCcw,
  ShoppingCart, Hammer, Pickaxe, Axe, Fish, Scroll, Map, Compass, Globe, Wind, Sun, Moon, CloudRain,
  Lightbulb, Battery, Wifi, Volume2, VolumeX, Pause, Play, FastForward, SkipForward, Calendar,
  AlertTriangle, CheckCircle, XCircle, Info, HelpCircle, Search, Filter, SortAsc, Edit3, Save,
  FileText, Image, Camera, Video, Music, Headphones, Mic, Phone, Mail, Send, Share, Download,
  Upload, Trash2, Archive, Lock, Unlock, Key, UserCheck, UserPlus, UserMinus, Activity, TrendingUp,
  Zap as Lightning, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, RotateCw, Volume, Home, Building,
  Tent, Castle, Factory, Users2, Bot, Layers, PlusCircle, MinusCircle, BarChart3, LineChart
} from 'lucide-react';

const UltimateRPGGame = () => {
  // ======================== COMPREHENSIVE GAME STATE ========================
  const [gameState, setGameState] = useState({
    player: {
      id: 'player_001',
      name: 'DragonSlayer',
      title: 'Eternal Sovereign',
      class: 'Omnimancer', // Multi-class system
      subclasses: ['Arcane Warrior', 'Divine Healer', 'Shadow Assassin'],
      level: 250,
      experience: 45875320,
      experienceToNext: 50000000,
      totalExperience: 325000000,
      prestigeLevel: 3,
      reincarnation: 2,
      
      // Advanced character stats with racial bonuses
      race: 'Ancient Dragon Hybrid',
      raceTraits: ['Fire Immunity', 'Flight Capable', 'Ancient Wisdom', 'Dragon Breath'],
      
      baseStats: {
        strength: 4500,      // Physical damage, carry capacity
        agility: 3850,       // Speed, dodge, crit rate
        intelligence: 4200,  // Magic damage, MP, spell accuracy
        vitality: 5200,      // HP, HP regen, status resist
        luck: 2150,          // Crit chance, item drops, success rates
        charisma: 2890,      // NPC relations, leadership, trade
        wisdom: 3650,        // MP regen, skill learning, experience
        endurance: 4100,     // Stamina, fatigue resistance
        perception: 2950,    // Detection, accuracy, awareness
        willpower: 3750      // Mental resist, focus, concentration
      },
      
      // Complex derived stats
      derivedStats: {
        hp: { current: 185000, max: 200000, regen: 850 },
        mp: { current: 165000, max: 180000, regen: 920 },
        sp: { current: 28000, max: 35000, regen: 180 },
        energy: { current: 15000, max: 18000, regen: 95 }, // New energy system
        
        attack: { 
          physical: { min: 65000, max: 85000, penetration: 15000 },
          magical: { min: 58000, max: 78000, penetration: 18000 },
          ranged: { min: 52000, max: 68000, penetration: 12000 }
        },
        
        defense: { 
          physical: { armor: 45000, reduction: 65, block: 25 },
          magical: { resistance: 38000, reduction: 55, absorb: 15 },
          ranged: { evasion: 35000, dodge: 45, deflect: 20 }
        },
        
        combat: {
          critRate: 85,
          critDamage: 420,
          attackSpeed: 2.8,
          castSpeed: 3.2,
          moveSpeed: 4250,
          accuracy: 95,
          penetration: 25,
          lifeSteal: 15,
          spellVamp: 12
        },
        
        resistances: {
          fire: 85, ice: 70, lightning: 75, earth: 60, wind: 55,
          light: 90, dark: 65, poison: 50, curse: 45, time: 35,
          space: 30, chaos: 25, order: 80, death: 40, life: 95
        },
        
        special: {
          dragonPower: 15000,    // Unique to dragon race
          divineBlessing: 8500,   // From achievements
          ancientWisdom: 12000,   // From age/experience
          voidMastery: 6000       // From void quests
        }
      },
      
      // Enhanced 3D positioning with multiple layers
      position: { 
        x: 2500, 
        y: 1800, 
        z: 150,           // Height for flying/swimming
        dimension: 'material', // material, astral, shadow, etc.
        layer: 'surface', // underground, surface, aerial, space
        facing: 'northeast',
        mapId: 'eternal_dragon_realm',
        lastSafePosition: { x: 2500, y: 1800, z: 0 }
      },
      
      // Comprehensive resource management
      resources: {
        primary: {
          gold: 185750000,
          platinum: 8500000,
          gems: 2850000,
          crystals: 750000,
          essence: 285000,
          souls: 95000,
          divinity: 15000
        },
        
        crafting: {
          // Basic materials
          wood: { oak: 5000, pine: 3000, darkwood: 800, worldtree: 50 },
          stone: { granite: 4000, marble: 2000, obsidian: 600, starstone: 25 },
          metal: { iron: 3500, steel: 2000, mithril: 500, adamantine: 80, dragonium: 15 },
          leather: { basic: 2500, enchanted: 800, dragon: 200, phoenix: 45 },
          fabric: { silk: 2000, shadowweave: 600, ethereal: 150, timefabric: 30 },
          
          // Magical components
          herbs: { 
            healing: 5000, mana: 4000, strength: 2000, agility: 1800,
            rare: { dragonheart: 50, phoenixleaf: 35, voidmoss: 25, timebloom: 15 }
          },
          
          gems: {
            common: { ruby: 500, sapphire: 450, emerald: 400, diamond: 350 },
            rare: { dragonstone: 80, voidcrystal: 45, starfragment: 25 },
            legendary: { worldheart: 8, cosmicorb: 3, infinitygem: 1 }
          },
          
          essences: {
            elemental: { fire: 800, ice: 750, lightning: 700, earth: 650 },
            cosmic: { star: 150, void: 120, time: 80, space: 60 },
            divine: { light: 200, dark: 180, order: 100, chaos: 85 }
          }
        },
        
        rare: {
          dragonScales: 285,
          phoenixFeathers: 180,
          voidFragments: 125,
          timeShards: 85,
          divineEssence: 65,
          cosmicDust: 45,
          soulCrystals: 35,
          eternityStones: 12,
          realityFragments: 8,
          godshards: 3
        },
        
        special: {
          titlePoints: 25000,
          reputationPoints: 185000,
          honorPoints: 95000,
          karmaPoints: 15000,
          famePoints: 125000,
          infamyPoints: 8500
        }
      },
      
      // Advanced multi-tier equipment system
      equipment: {
        // Weapon sets (can equip multiple)
        weapons: {
          primary: { 
            id: 'reality_breaker_001',
            name: 'Reality Breaker - Genesis Edge +50', 
            type: 'legendary_sword',
            tier: 'transcendent',
            rarity: 'artifact', 
            level: 50,
            evolution: { stage: 5, maxStage: 10 },
            soulbound: true,
            durability: { current: 99999, max: 100000, infinite: true },
            
            stats: { 
              attack: { min: 45000, max: 65000 },
              critRate: 45, 
              critDamage: 150,
              penetration: 25000,
              special: { realitySlash: 15000, timeCut: 8000 }
            },
            
            enchantments: [
              { name: 'Dragon Slayer', level: 20, effect: '+500% damage vs dragons' },
              { name: 'Soul Reaper', level: 18, effect: 'Absorb enemy souls on kill' },
              { name: 'Time Fracture', level: 15, effect: 'Chance to freeze time' },
              { name: 'Reality Slash', level: 12, effect: 'Ignore all defenses' },
              { name: 'Void Cutter', level: 10, effect: 'Cut through dimensions' }
            ],
            
            gems: [
              { socket: 1, gem: 'Infinity Diamond', effect: '+15000 attack' },
              { socket: 2, gem: 'Time Crystal', effect: '+25% attack speed' },
              { socket: 3, gem: 'Chaos Emerald', effect: '+50% crit damage' },
              { socket: 4, gem: 'Dragon Ruby', effect: '+200% damage vs all' }
            ],
            
            abilities: [
              'Genesis Strike', 'Reality Rend', 'Time Slash', 'Void Cleave',
              'Dragon Annihilation', 'Soul Harvest', 'Dimension Cutter'
            ]
          },
          
          secondary: {
            name: 'Omniscience Staff of Eternity +45',
            type: 'cosmic_staff',
            tier: 'transcendent',
            stats: { magical_attack: 55000, mp: 25000, cast_speed: 85 }
          },
          
          ranged: {
            name: 'Infinity Bow of the Void +40',
            type: 'legendary_bow',
            tier: 'mythic',
            stats: { ranged_attack: 48000, accuracy: 95, range: 2000 }
          }
        },
        
        // Armor sets with set bonuses
        armor: {
          helmet: { 
            name: 'Crown of the Eternal Dragon Emperor +50', 
            tier: 'artifact',
            setName: 'Eternal Dragon God Set',
            stats: { 
              defense: 15000, hp: 25000, mp: 20000,
              resistances: { all: 25, dragon: 100 },
              special: { dragonSight: true, omniscience: true }
            },
            abilities: ['Dragon Vision', 'Mind Control', 'Thought Reading']
          },
          
          chest: { 
            name: 'Dragonscale Chestplate of Infinity +50', 
            tier: 'artifact',
            setName: 'Eternal Dragon God Set',
            stats: { 
              defense: 35000, hp: 50000,
              resistances: { fire: 90, physical: 50 },
              special: { dragonHeart: 15000, regeneration: 500 }
            }
          },
          
          legs: { 
            name: 'Leggings of Cosmic Wind +48', 
            tier: 'transcendent',
            stats: { 
              defense: 20000, speed: 2000, agility: 1500,
              special: { flight: true, dimensionalStep: true }
            }
          },
          
          boots: { 
            name: 'Boots of Eternal Journey +47', 
            tier: 'transcendent',
            stats: { 
              defense: 12000, speed: 3000, stamina: 8000,
              special: { waterWalk: true, lavaWalk: true, voidWalk: true }
            }
          },
          
          gloves: { 
            name: 'Gauntlets of Divine Creation +49', 
            tier: 'artifact',
            stats: { 
              defense: 18000, attack: 8000, crafting: 5000,
              special: { creation: true, destruction: true }
            }
          },
          
          cloak: {
            name: 'Cloak of Infinite Shadows +45',
            tier: 'legendary',
            stats: {
              defense: 8000, evasion: 35, stealth: 90,
              special: { invisibility: true, shadowTravel: true }
            }
          }
        },
        
        // Advanced accessory system
        accessories: {
          rings: [
            { 
              name: 'Ring of Infinite Mana', 
              tier: 'artifact',
              stats: { mp: 30000, mpRegen: 200, castSpeed: 50 },
              abilities: ['Infinite Spells', 'Mana Shield', 'Spell Mastery']
            },
            { 
              name: 'Ring of Dragon Lordship', 
              tier: 'transcendent',
              stats: { 
                attack: 15000, critDamage: 100, 
                dragonPower: 25000, leadership: 5000 
              },
              abilities: ['Dragon Command', 'Draconic Aura', 'Dragon Transformation']
            },
            {
              name: 'Ring of Time Mastery',
              tier: 'cosmic',
              stats: { 
                allStats: 2000, cooldownReduction: 50,
                timeControl: 10000
              },
              abilities: ['Time Stop', 'Time Acceleration', 'Time Reversal']
            }
          ],
          
          necklaces: [
            { 
              name: 'Amulet of Cosmic Wisdom', 
              tier: 'artifact',
              stats: { 
                allStats: 1500, experience: 100, wisdom: 3000,
                special: { omniscience: 5000, prophecy: true }
              },
              abilities: ['Foresight', 'Divine Knowledge', 'Instant Learning']
            }
          ],
          
          earrings: [
            { 
              name: 'Earrings of Divine Harmony', 
              tier: 'legendary',
              stats: { 
                intelligence: 2000, charisma: 1500, luck: 1000,
                special: { harmony: 3000, balance: 2000 }
              }
            }
          ],
          
          brooch: {
            name: 'Brooch of Guild Supremacy',
            tier: 'mythic',
            stats: {
              leadership: 8000, influence: 5000, reputation: 3000
            }
          }
        },
        
        // Equipment enhancement system
        enhancement: {
          totalEnhancement: 2350,
          enhancementPoints: 125000,
          transcendenceLevel: 15,
          awakeningStage: 8
        },
        
        // Set bonuses
        setBonuses: {
          'Eternal Dragon God Set': {
            pieces: 5,
            bonuses: {
              2: { allStats: 2000, dragonPower: 10000 },
              3: { hp: 50000, mp: 40000, resistances: { all: 30 } },
              4: { attack: { all: 20000 }, defense: { all: 15000 } },
              5: { 
                abilities: ['Dragon God Transformation', 'Reality Dominion'],
                special: { godMode: true, immortality: true }
              }
            }
          }
        }
      },
      
      // Complex multi-tree skill system
      skills: {
        // Skill trees for each class
        skillTrees: {
          combat: {
            swordMastery: {
              level: 200, experience: 5000000, maxLevel: 300,
              branches: {
                offensive: ['Blade Dance', 'Thousand Cuts', 'Reality Slash'],
                defensive: ['Parry Master', 'Blade Barrier', 'Counter Strike'],
                ultimate: ['Sword Saint', 'Blade God', 'Reality Cutter']
              }
            },
            
            magicMastery: {
              level: 185, experience: 4200000, maxLevel: 300,
              schools: {
                elemental: ['Fire God', 'Ice Emperor', 'Lightning Lord'],
                cosmic: ['Star Caller', 'Void Master', 'Time Weaver'],
                divine: ['Light Bringer', 'Shadow Walker', 'Order Keeper']
              }
            },
            
            dragonArts: {
              level: 150, experience: 3500000, maxLevel: 200,
              forms: {
                breath: ['Fire Breath', 'Ice Breath', 'Void Breath'],
                flight: ['Sky Mastery', 'Dimensional Flight', 'Cosmic Soar'],
                transformation: ['Half Dragon', 'True Dragon', 'Ancient Dragon']
              }
            }
          },
          
          life: {
            crafting: {
              smithing: { level: 180, experience: 3800000 },
              enchanting: { level: 175, experience: 3600000 },
              alchemy: { level: 170, experience: 3400000 },
              cooking: { level: 160, experience: 3200000 },
              tailoring: { level: 155, experience: 3000000 }
            },
            
            gathering: {
              mining: { level: 190, experience: 4000000 },
              logging: { level: 185, experience: 3900000 },
              fishing: { level: 180, experience: 3800000 },
              hunting: { level: 175, experience: 3700000 },
              farming: { level: 170, experience: 3500000 }
            },
            
            social: {
              leadership: { level: 200, experience: 5000000 },
              diplomacy: { level: 180, experience: 4000000 },
              trading: { level: 175, experience: 3800000 },
              teaching: { level: 170, experience: 3600000 }
            }
          }
        },
        
        // Active combat skills with complex mechanics
        activeSkills: [
          { 
            id: 1, 
            name: 'Genesis Dragon Annihilation', 
            element: 'dragon',
            type: 'ultimate_physical',
            tier: 'transcendent',
            damage: { min: 500000, max: 1200000 },
            cost: { mp: 5000, sp: 2000, energy: 1000 }, 
            cooldown: 300,
            range: 2000,
            areaEffect: { radius: 500, shape: 'dragon_breath' },
            description: 'Ultimate dragon technique that annihilates everything in its path',
            requirements: { 
              level: 200, dragonArts: 100, swordMastery: 150,
              equipped: 'dragon_weapon'
            },
            effects: [
              'Ignore all defenses',
              'Soul damage',
              'Reality distortion',
              'Fear aura (1000 meter radius)'
            ],
            animations: { cast: 5000, effect: 8000, recovery: 2000 }
          },
          
          { 
            id: 2, 
            name: 'Infinite Divine Barrier', 
            element: 'divine',
            type: 'ultimate_defensive',
            tier: 'cosmic',
            effect: { type: 'absolute_shield', value: 999999999 },
            cost: { mp: 8000, energy: 1500 }, 
            cooldown: 600,
            duration: 60000,
            description: 'Creates an impenetrable divine barrier that blocks everything',
            requirements: { level: 180, divineBlessing: 10000 },
            effects: [
              'Immunity to all damage',
              'Status immunity',
              'Dimension lock',
              'Reflect 200% damage'
            ]
          },
          
          { 
            id: 3, 
            name: 'Cosmic Meteor Apocalypse', 
            element: 'cosmic',
            type: 'ultimate_magical',
            tier: 'transcendent',
            damage: { min: 800000, max: 1500000 },
            cost: { mp: 12000, energy: 2000 }, 
            cooldown: 900,
            castTime: 10000,
            range: 5000,
            areaEffect: { radius: 1000, shape: 'multiple_meteors', count: 50 },
            description: 'Calls down a devastating meteor shower from across dimensions',
            requirements: { level: 220, magicMastery: 180 },
            effects: [
              'Map-wide destruction',
              'Creates permanent craters',
              'Dimensional rifts',
              'Time distortion'
            ]
          },
          
          { 
            id: 4, 
            name: 'Absolute Zero Dimension', 
            element: 'ice',
            type: 'ultimate_magical',
            tier: 'transcendent',
            damage: { min: 600000, max: 1000000 },
            cost: { mp: 10000, energy: 1800 }, 
            cooldown: 720,
            range: 3000,
            areaEffect: { radius: 800, shape: 'expanding_freeze' },
            description: 'Freezes an entire dimension to absolute zero',
            effects: [
              'Stop all movement and actions',
              'Dimensional freeze',
              'Shatter reality',
              'Time freeze'
            ],
            debuffs: { 
              freeze: { duration: 30000, immunity: false },
              timeStop: { duration: 10000 }
            }
          },
          
          { 
            id: 5, 
            name: 'World Ending Slash', 
            element: 'void',
            type: 'ultimate_physical',
            tier: 'cosmic',
            damage: { min: 2000000, max: 5000000 },
            cost: { mp: 15000, sp: 5000, energy: 3000 }, 
            cooldown: 1800,
            range: 10000,
            areaEffect: { radius: 2000, shape: 'dimensional_cut' },
            description: 'A slash so powerful it can cut through reality itself',
            requirements: { 
              level: 250, voidMastery: 100, realityFragments: 1 
            },
            effects: [
              'Cut through dimensions',
              'Permanent reality damage',
              'Split worlds',
              'Erase from existence'
            ]
          },
          
          // More ultimate skills...
          { 
            id: 6, 
            name: 'Phoenix God Resurrection', 
            element: 'phoenix',
            type: 'ultimate_healing',
            tier: 'transcendent',
            cost: { mp: 20000, energy: 2500 }, 
            cooldown: 3600,
            description: 'Complete resurrection with enhanced power',
            effects: [
              'Full heal + status cleanse',
              'Temporary invincibility (60s)',
              'All stats +200% (300s)',
              'Phoenix transformation'
            ]
          },
          
          { 
            id: 7, 
            name: 'Omnipresent Void Step', 
            element: 'void',
            type: 'ultimate_utility',
            tier: 'cosmic',
            cost: { mp: 3000, energy: 800 }, 
            cooldown: 45,
            range: 999999,
            description: 'Teleport anywhere across dimensions instantly',
            effects: [
              'Cross-dimensional travel',
              'Untargetable during cast',
              'Perfect positioning',
              'Void trail damage'
            ]
          },
          
          { 
            id: 8, 
            name: 'Reality Dominion Breaker', 
            element: 'chaos',
            type: 'ultimate_transformation',
            tier: 'beyond_transcendent',
            damage: { min: 10000000, max: 99999999 },
            cost: { mp: 50000, sp: 20000, energy: 10000 }, 
            cooldown: 7200,
            duration: 180000,
            description: 'Transform into a being that dominates reality itself',
            requirements: { 
              reincarnation: 2, transcendenceLevel: 10,
              godshards: 1
            },
            effects: [
              'Become reality god',
              'Rewrite laws of physics',
              'Control time and space',
              'Command all existence'
            ]
          }
        ],
        
        // Skill state management
        cooldowns: new Map(),
        buffs: new Map(),
        debuffs: new Map(),
        combos: {
          recorded: [],
          available: [],
          maxChain: 20,
          currentChain: 0,
          multiplier: 1.0
        }
      },
      
      // Advanced companion/pet system
      companions: [
        { 
          id: 'ancient_dragon_god', 
          name: 'Eternal Shadowfang Destroyer God', 
          type: 'Ancient Dragon God', 
          level: 300, 
          tier: 'transcendent',
          rarity: 'unique_cosmic',
          active: true,
          
          stats: {
            hp: { current: 500000, max: 500000, regen: 2500 },
            mp: { current: 300000, max: 300000, regen: 1800 },
            attack: { physical: 180000, magical: 150000 },
            defense: { physical: 120000, magical: 100000 },
            speed: 8500,
            special: { dragonPower: 50000, divinity: 25000 }
          },
          
          skills: [
            'Divine Dragon Breath', 'Reality Wing Storm', 'Cosmic Dragon Roar',
            'Dimensional Flight', 'Time Dragon Magic', 'God Dragon Transformation'
          ],
          
          evolution: { 
            stage: 8, maxStage: 10,
            requirements: { level: 350, dragonEssence: 1000 }
          },
          
          loyalty: 100,
          bond: 'Soul Bonded',
          experience: 25000000,
          personality: 'Noble Destroyer',
          
          equipment: {
            armor: 'Dragon God Battle Armor +50',
            accessories: ['Dragon Crown of Supremacy', 'Infinity Dragon Ring']
          }
        },
        
        { 
          id: 'phoenix_empress', 
          name: 'Celestial Phoenix Empress', 
          type: 'Immortal Phoenix Empress', 
          level: 280, 
          tier: 'transcendent',
          active: false,
          
          stats: {
            hp: { current: 400000, max: 400000, regen: 5000 },
            mp: { current: 450000, max: 450000, regen: 3000 },
            attack: { magical: 220000, healing: 180000 },
            defense: { magical: 150000, holy: 200000 },
            speed: 12000,
            special: { phoenixPower: 40000, resurrection: 999 }
          },
          
          skills: [
            'Infinity Phoenix Fire', 'Resurrection Storm', 'Healing Paradise',
            'Phoenix Transformation', 'Immortal Flight', 'Divine Phoenix Song'
          ],
          
          evolution: { stage: 6, maxStage: 8 },
          loyalty: 98,
          bond: 'Divine Contract'
        },
        
        // Unique companions
        {
          id: 'void_familiar',
          name: 'Void Devourer Familiar',
          type: 'Cosmic Void Entity',
          level: 220,
          tier: 'cosmic',
          active: false,
          
          specialAbilities: [
            'Void Consumption', 'Reality Erosion', 'Dimensional Phasing',
            'Existence Drain', 'Void Portal Creation'
          ],
          
          stats: {
            hp: { current: 150000, max: 150000 },
            voidPower: 35000,
            realityManipulation: 20000
          }
        }
      ],
      
      // Complex guild and alliance system
      guild: { 
        id: 'eternal_legends_supreme',
        name: 'Eternal Legends of Infinity', 
        level: 50,
        tier: 'Transcendent',
        rank: 'Supreme God Emperor', 
        members: {
          total: 500,
          online: 287,
          officers: 25,
          elites: 75,
          veterans: 150,
          regulars: 250
        },
        
        territory: {
          main: 'Dragon Empire Infinite Citadel',
          conquered: [
            'Void Fortress of Eternity',
            'Cosmic Castle of Stars',
            'Divine Temple Complex',
            'Ancient Dragon Sanctuaries'
          ],
          totalSize: 50000, // square kilometers
          resources: 85000000,
          buildings: 150
        },
        
        power: {
          military: 2500000,
          economic: 1800000,
          diplomatic: 1200000,
          magical: 3000000
        },
        
        wars: { 
          active: 3, 
          won: 127, 
          lost: 8, 
          legendary: 15 // Epic wars
        },
        
        alliances: [
          'Divine Phoenix Alliance',
          'Cosmic Dragon Federation',
          'Eternal Warrior Union'
        ],
        
        rivals: [
          'Shadow Empire Guild',
          'Chaos Dominion',
          'Void Destroyers'
        ],
        
        achievements: [
          'First Guild to Level 50',
          'Conquered 10+ Regions',
          'Dragon Slayer Guild',
          'Reality Conquerors'
        ]
      },
      
      // Advanced relationship system
      relationships: {
        npcs: new Map([
          ['dragon_emperor', { 
            name: 'Ancient Dragon Emperor Valdris', 
            relationship: 100, 
            status: 'sworn_ally',
            title: 'Dragon God of War',
            influence: 'continental',
            backstory: 'Ancient ruler who respects your dragon heritage',
            questsGiven: 25,
            questsCompleted: 23,
            gifts: ['Dragon Crown', 'Ancient Dragon Scroll'],
            specialServices: ['Dragon Transformation Training', 'Ancient Knowledge']
          }],
          
          ['void_sage', {
            name: 'Master Void Sage Nethys',
            relationship: 95,
            status: 'mentor',
            title: 'Keeper of Void Mysteries',
            influence: 'dimensional',
            specialties: ['Void Magic', 'Reality Manipulation', 'Dimensional Travel'],
            teachings: ['Void Step', 'Reality Slash', 'Dimensional Mastery']
          }],
          
          ['phoenix_queen', {
            name: 'Immortal Phoenix Queen Seraphina',
            relationship: 92,
            status: 'divine_ally',
            title: 'Empress of Eternal Flames',
            influence: 'planar',
            bond: 'Phoenix Contract',
            abilities: ['Resurrection', 'Divine Healing', 'Phoenix Transformation']
          }],
          
          ['cosmic_librarian', {
            name: 'Cosmic Librarian Omnicus',
            relationship: 88,
            status: 'knowledge_keeper',
            title: 'Guardian of All Knowledge',
            influence: 'universal',
            services: ['Skill Training', 'Spell Research', 'Reality Documentation'],
            knowledgeLevel: 'omniscient'
          }]
        ]),
        
        players: new Map([
          ['dragonslayer_elite', {
            name: 'DragonSlayer Elite',
            relationship: 85,
            status: 'battle_brother',
            guild: 'Eternal Legends of Infinity',
            rank: 'Supreme Officer',
            sharedBattles: 150,
            trustLevel: 'absolute'
          }],
          
          ['void_empress', {
            name: 'Void Empress Luna',
            relationship: -75,
            status: 'arch_rival',
            guild: 'Shadow Empire Guild',
            reason: 'Territory disputes',
            battles: 23,
            victories: { player: 13, enemy: 10 }
          }]
        ]),
        
        factions: new Map([
          ['dragon_council', {
            name: 'Ancient Dragon Council',
            relationship: 98,
            status: 'honored_member',
            rank: 'Dragon Lord',
            influence: 'global',
            benefits: ['Dragon Sanctuary Access', 'Ancient Knowledge', 'Dragon Magic']
          }],
          
          ['void_watchers', {
            name: 'Void Watchers Organization',
            relationship: 75,
            status: 'trusted_agent',
            rank: 'Void Master',
            missions: 47,
            clearanceLevel: 'cosmic'
          }]
        ])
      },
      
      // Comprehensive achievement system
      achievements: {
        combat: {
          completed: [
            'Dragon Slayer Supreme', 'God Killer Elite', 'Reality Breaker Master',
            'Void Conqueror', 'Phoenix Defeater', 'Cosmic Warrior',
            'Dimension Destroyer', 'Time Warrior', 'Space Cleaver'
          ],
          legendary: [
            'Defeated Ancient Dragon God',
            'Solo Raid Clear (Impossible Difficulty)',
            'Killed 1 Million Monsters',
            'Perfect Combat Record (1000 battles)'
          ]
        },
        
        exploration: {
          completed: [
            'World Walker Supreme', 'Dimension Hopper Elite', 'Plane Explorer Master',
            'Void Navigator', 'Time Traveler', 'Space Explorer',
            'Reality Tourist', 'Cosmic Wanderer'
          ],
          legendary: [
            'Discovered 50 Hidden Dimensions',
            'First to Reach Edge of Reality',
            'Mapped Entire Cosmic Structure'
          ]
        },
        
        social: {
          completed: [
            'Guild Master Supreme', 'Legendary Leader Elite', 'Mentor God',
            'Diplomat Extraordinary', 'Alliance Builder', 'Peace Maker'
          ],
          legendary: [
            'United 100 Guilds',
            'Ended Continental War',
            'Established Inter-dimensional Peace'
          ]
        },
        
        crafting: {
          completed: [
            'Master Craftsman Supreme', 'Legendary Smith God', 'Divine Creator',
            'Reality Shaper', 'Cosmic Forger', 'Infinity Enchanter'
          ],
          legendary: [
            'Created Artifact Weapon',
            'Forged Reality-Altering Equipment',
            'Invented New Crafting Method'
          ]
        },
        
        special: {
          completed: [
            'Immortal Being', 'Reality Controller', 'God-like Entity',
            'Cosmic Force', 'Universal Constant', 'Existence Shaper'
          ],
          unique: [
            'First Player to Reach Level 250',
            'Only Player with God-Tier Pet',
            'Reality Manipulation Mastery',
            'Transcended Mortal Limits'
          ]
        },
        
        statistics: {
          total: 847,
          points: 125680,
          trophies: 89,
          titles: 156,
          legendaryAchievements: 23
        }
      },
      
      // Advanced world position system
      currentRegion: 'eternal_dragon_realm',
      worldPosition: { 
        universe: 'prime_reality',
        dimension: 'material_plane',
        galaxy: 'dragon_spiral',
        star_system: 'eternal_suns',
        planet: 'draconius_prime',
        continent: 'infinity_lands', 
        kingdom: 'eternal_dragon_empire', 
        region: 'transcendent_territories',
        subregion: 'god_emperor_domain'
      },
      
      // Housing and properties
      properties: {
        personal: {
          main: {
            name: 'Infinite Dragon Palace',
            type: 'transcendent_palace',
            size: 'massive',
            location: 'Floating Island Above Reality',
            rooms: 500,
            features: [
              'Personal Training Grounds',
              'Infinite Library',
              'Dragon Sanctuaries',
              'Void Research Lab',
              'Reality Manipulation Chamber',
              'Time Dilation Rooms',
              'Portal Network Hub',
              'Cosmic Observatory'
            ],
            staff: {
              dragons: 25,
              servants: 100,
              guards: 200,
              researchers: 50
            },
            defenses: [
              'Reality Barriers',
              'Dragon Guard Army',
              'Void Traps',
              'Time Locks',
              'Dimensional Shields'
            ]
          },
          
          secondary: [
            {
              name: 'Void Research Fortress',
              type: 'research_facility',
              location: 'Void Dimension Border',
              purpose: 'Studying reality manipulation'
            },
            {
              name: 'Dragon Breeding Sanctuary',
              type: 'breeding_ground',
              location: 'Ancient Dragon Realm',
              purpose: 'Raising legendary dragons'
            }
          ]
        },
        
        guild: {
          name: 'Eternal Citadel of Infinity',
          type: 'transcendent_guild_city',
          size: 'city_sized',
          population: 50000,
          facilities: [
            'Guild War Command Center',
            'Massive Training Complexes',
            'Advanced Crafting Districts',
            'Portal Network',
            'Dragon Landing Platforms',
            'Void Energy Reactors'
          ]
        }
      },
      
      // Personal vehicles/mounts
      mounts: {
        active: {
          name: 'Cosmic Dragon God Kaiseth',
          type: 'Ancient Cosmic Dragon',
          level: 400,
          tier: 'beyond_transcendent',
          abilities: [
            'Faster Than Light Flight',
            'Dimensional Phasing',
            'Reality Manipulation',
            'Time Travel',
            'Cosmic Breath Weapons'
          ],
          speed: {
            ground: 50000,
            flight: 100000,
            dimensional: 'instantaneous'
          }
        },
        
        collection: [
          'Phoenix Empress Mount',
          'Void Devourer Steed',
          'Time Dragon',
          'Space Whale',
          'Reality Manipulator Ship'
        ]
      }
    },
    
    // ======================== ADVANCED WORLD SYSTEM ========================
    world: {
      // Multiple interconnected universes and dimensions
      universes: {
        prime_reality: {
          dimensions: {
            material_plane: {
              stability: 100,
              danger_level: 'variable',
              physics: 'standard',
              magic_level: 'high',
              
              realms: {
                eternal_dragon_realm: {
                  id: 'eternal_dragon_realm_prime',
                  name: 'Eternal Dragon Realm of Infinite Power',
                  type: 'transcendent_realm',
                  size: { width: 50000, height: 50000, depth: 10000 }, // 3D world
                  levelRange: { min: 200, max: 400 },
                  dangerLevel: 10,
                  tier: 'transcendent',
                  
                  climate: {
                    type: 'mystical_variable',
                    seasons: ['Eternal Spring', 'Dragon Summer', 'Void Autumn', 'Cosmic Winter'],
                    currentSeason: 'Dragon Summer',
                    weather: { 
                      current: 'aurora_storm', 
                      intensity: 'magnificent',
                      effects: ['increased_magic', 'time_dilation', 'reality_shimmer']
                    }
                  },
                  
                  environment: {
                    temperature: 25, // Celsius
                    humidity: 45,
                    windSpeed: 35,
                    magicDensity: 95, // Very high magic
                    voidInfluence: 25,
                    timeDistortion: 15,
                    gravity: 1.2,
                    atmosphere: 'draconic_essence'
                  },
                  
                  landmarks: [
                    {
                      name: 'Ancient Dragon God Temple',
                      type: 'mega_structure',
                      position: { x: 25000, y: 25000, z: 500 },
                      size: { width: 2000, height: 1000, depth: 500 },
                      significance: 'Ultimate pilgrimage site',
                      guardians: ['Ancient Dragon Gods'],
                      treasures: ['Dragon God Artifacts', 'Reality Crystals'],
                      requirements: { level: 300, dragonBlessing: true }
                    },
                    
                    {
                      name: 'Void Convergence Point',
                      type: 'dimensional_nexus',
                      position: { x: 10000, y: 40000, z: 0 },
                      danger: 'extreme',
                      effects: ['reality_distortion', 'void_corruption', 'power_amplification'],
                      portals: ['void_dimension', 'shadow_realm', 'chaos_plane']
                    },
                    
                    {
                      name: 'Infinity Crystal Forest',
                      type: 'magical_biome',
                      position: { x: 35000, y: 15000, z: 0 },
                      size: { radius: 5000 },
                      resources: ['infinity_crystals', 'time_shards', 'reality_fragments'],
                      creatures: ['Crystal Dragons', 'Time Spirits', 'Reality Guardians']
                    }
                  ],
                  
                  regions: {
                    dragon_god_territory: {
                      ruler: 'Ancient Dragon Emperor',
                      population: 500000,
                      type: 'dragon_paradise',
                      specialties: ['Dragon Magic', 'Fire Mastery', 'Flight Combat']
                    },
                    
                    void_borderlands: {
                      ruler: 'Void Watchers',
                      population: 50000,
                      type: 'research_zone',
                      danger: 'extreme',
                      specialties: ['Void Magic', 'Reality Research', 'Dimensional Science']
                    },
                    
                    cosmic_observatory: {
                      ruler: 'Cosmic Council',
                      population: 100000,
                      type: 'knowledge_center',
                      specialties: ['Space Magic', 'Time Studies', 'Universal Knowledge']
                    }
                  },
                  
                  // Advanced NPC system
                  npcs: [
                    {
                      id: 'dragon_god_emperor',
                      name: 'Supreme Dragon God Emperor Bahamutix',
                      type: 'legendary_quest_giver',
                      tier: 'cosmic',
                      position: { x: 25000, y: 25000, z: 500 },
                      level: 500,
                      
                      stats: {
                        hp: { current: 50000000, max: 50000000 },
                        power_level: 999999999,
                        influence: 'universal'
                      },
                      
                      personality: 'Ancient, Wise, Extremely Powerful',
                      dialogue_system: 'advanced_ai',
                      
                      quests: [
                        {
                          id: 'cosmic_dragon_trial',
                          name: 'Trial of the Cosmic Dragon',
                          type: 'legendary',
                          difficulty: 'impossible',
                          requirements: { level: 250, dragonHeritage: true },
                          rewards: {
                            title: 'Dragon God Inheritor',
                            transformation: 'Cosmic Dragon Form',
                            artifact: 'Crown of Dragon Dominion'
                          }
                        },
                        
                        {
                          id: 'reality_guardian_task',
                          name: 'Become Guardian of Reality',
                          type: 'ultimate',
                          description: 'Prove worthy to guard existence itself',
                          requirements: { 
                            level: 300, 
                            achievements: ['Reality Controller'],
                            items: ['Reality Fragments: 10']
                          }
                        }
                      ],
                      
                      services: [
                        'Dragon Transformation Ultimate',
                        'Reality Manipulation Training',
                        'Cosmic Knowledge Sharing',
                        'Divine Blessing Bestowal'
                      ],
                      
                      shop: {
                        currency: 'dragon_divinity_points',
                        items: [
                          {
                            name: 'Dragon God Essence',
                            price: 1000000,
                            effect: 'Permanently increase all stats by 10000'
                          },
                          {
                            name: 'Reality Manipulation Scroll',
                            price: 5000000,
                            effect: 'Learn ultimate reality control'
                          }
                        ]
                      }
                    },
                    
                    {
                      id: 'void_research_master',
                      name: 'Master Void Researcher Nethysius',
                      type: 'skill_trainer_ultimate',
                      tier: 'transcendent',
                      position: { x: 10000, y: 40000, z: 100 },
                      level: 400,
                      
                      specializations: [
                        'Void Magic Mastery',
                        'Reality Manipulation',
                        'Dimensional Sciences',
                        'Existence Theory'
                      ],
                      
                      training_programs: [
                        {
                          name: 'Void Mastery Complete',
                          duration: '30 days',
                          cost: { void_fragments: 500, reality_shards: 100 },
                          benefits: ['Void Magic +200 levels', 'New Void Abilities']
                        }
                      ]
                    },
                    
                    {
                      id: 'cosmic_merchant_god',
                      name: 'Infinite Cosmic Merchant Tradeus',
                      type: 'ultimate_merchant',
                      tier: 'cosmic',
                      position: { x: 35000, y: 15000, z: 200 },
                      level: 350,
                      
                      shop_tiers: {
                        legendary: {
                          currency: 'platinum',
                          stock: ['Legendary Weapons', 'Mythic Armor', 'Epic Accessories']
                        },
                        
                        mythic: {
                          currency: 'divinity_points',
                          stock: ['Artifact Equipment', 'Reality Crystals', 'God Tier Items']
                        },
                        
                        transcendent: {
                          currency: 'reality_fragments',
                          stock: ['Universe Shaping Tools', 'Existence Modifiers', 'Cosmic Artifacts']
                        }
                      },
                      
                      special_services: [
                        'Equipment Enhancement Beyond Limits',
                        'Custom Artifact Creation',
                        'Reality Modification Services',
                        'Dimension Crafting'
                      ]
                    }
                  ],
                  
                  // Complex monster ecosystem
                  monsters: {
                    common: [
                      {
                        id: 'greater_void_spawn',
                        name: 'Greater Void Spawn Abomination',
                        type: 'void_creature',
                        tier: 'legendary',
                        level_range: { min: 180, max: 220 },
                        spawn_locations: ['void_borderlands'],
                        
                        stats: {
                          hp: { min: 850000, max: 1200000 },
                          attack: { min: 45000, max: 65000 },
                          defense: { min: 25000, max: 35000 },
                          speed: { min: 3500, max: 4500 }
                        },
                        
                        abilities: [
                          'Void Corruption Aura',
                          'Reality Distortion Field',
                          'Dimension Rip Attack',
                          'Existence Drain'
                        ],
                        
                        ai_behavior: 'highly_aggressive',
                        group_behavior: 'pack_hunter',
                        
                        loot_tables: {
                          guaranteed: [
                            { item: 'void_essence', quantity: { min: 15, max: 25 } },
                            { item: 'corrupted_crystals', quantity: { min: 8, max: 12 } }
                          ],
                          
                          rare: [
                            { item: 'void_heart', chance: 25, quantity: 1 },
                            { item: 'reality_shard', chance: 15, quantity: 1 }
                          ],
                          
                          epic: [
                            { item: 'void_weapon_fragment', chance: 8, quantity: 1 },
                            { item: 'dimension_key', chance: 5, quantity: 1 }
                          ],
                          
                          legendary: [
                            { item: 'void_lord_essence', chance: 2, quantity: 1 },
                            { item: 'reality_manipulation_orb', chance: 1, quantity: 1 }
                          ]
                        },
                        
                        experience_reward: { min: 250000, max: 400000 },
                        respawn_time: 1800 // 30 minutes
                      }
                    ],
                    
                    elite: [
                      {
                        id: 'ancient_crystal_dragon',
                        name: 'Ancient Crystal Dragon Sovereign',
                        type: 'dragon_boss',
                        tier: 'mythic',
                        level: 280,
                        
                        stats: {
                          hp: { current: 15000000, max: 15000000 },
                          mp: { current: 8000000, max: 8000000 },
                          attack: { physical: 180000, magical: 220000 },
                          defense: { physical: 120000, magical: 150000 },
                          speed: 6500,
                          flight_speed: 15000
                        },
                        
                        phases: {
                          1: {
                            hp_threshold: 100,
                            abilities: ['Crystal Breath', 'Wing Buffet', 'Claw Strike']
                          },
                          2: {
                            hp_threshold: 60,
                            abilities: ['Crystal Storm', 'Dimensional Flight', 'Reality Shatter']
                          },
                          3: {
                            hp_threshold: 20,
                            abilities: ['Infinite Crystal Prison', 'Time Freeze Breath', 'Reality Collapse']
                          }
                        },
                        
                        unique_mechanics: [
                          'Periodic invulnerability phases',
                          'Summons crystal minions',
                          'Environmental destruction',
                          'Reality warping attacks'
                        ],
                        
                        loot_tables: {
                          guaranteed: [
                            { item: 'ancient_dragon_scale', quantity: 50 },
                            { item: 'crystal_dragon_heart', quantity: 1 },
                            { item: 'reality_crystals', quantity: 25 }
                          ],
                          
                          legendary: [
                            { item: 'dragon_god_weapon_fragment', chance: 50 },
                            { item: 'crystal_dragon_soul', chance: 30 },
                            { item: 'reality_manipulation_crown', chance: 15 }
                          ],
                          
                          mythic: [
                            { item: 'transcendent_dragon_essence', chance: 10 },
                            { item: 'dimension_shaper_orb', chance: 5 },
                            { item: 'god_tier_equipment_core', chance: 2 }
                          ]
                        }
                      }
                    ],
                    
                    world_bosses: [
                      {
                        id: 'void_emperor_supreme',
                        name: 'Void Emperor of Infinite Darkness',
                        type: 'world_ending_boss',
                        tier: 'cosmic_threat',
                        level: 400,
                        
                        description: 'An entity that threatens the very existence of reality',
                        
                        stats: {
                          hp: { current: 100000000, max: 100000000 },
                          void_power: 50000000,
                          reality_corruption: 25000000,
                          dimensional_control: 999999
                        },
                        
                        spawn_conditions: [
                          'Server-wide event',
                          'Requires 100+ max level players',
                          'Special void convergence event',
                          'Reality stability below 50%'
                        ],
                        
                        phases: {
                          1: { // Reality Destroyer Phase
                            hp_threshold: 100,
                            duration: 1800, // 30 minutes
                            abilities: [
                              'Continental Void Waves',
                              'Reality Tear Storms',
                              'Dimension Collapse Zones',
                              'Existence Erasure Beams'
                            ],
                            minions: ['Greater Void Lords', 'Reality Weavers']
                          },
                          
                          2: { // Dimension Controller Phase
                            hp_threshold: 50,
                            duration: 2400, // 40 minutes
                            abilities: [
                              'Multi-Dimensional Attacks',
                              'Time Loop Prisons',
                              'Space Distortion Fields',
                              'Parallel Reality Summons'
                            ]
                          },
                          
                          3: { // Existence Ender Phase
                            hp_threshold: 10,
                            duration: 1200, // 20 minutes
                            abilities: [
                              'Universal Void Expansion',
                              'Reality Deletion Waves',
                              'Existence Negation Field',
                              'Final Void Apocalypse'
                            ]
                          }
                        },
                        
                        unique_rewards: {
                          participants: {
                            title: 'Reality Defender',
                            achievement: 'Fought the Void Emperor',
                            items: ['Void Resistance Crystals', 'Reality Stabilizers']
                          },
                          
                          top_contributors: {
                            title: 'Hero of Existence',
                            items: ['Cosmic Weapons', 'Reality Shaper Tools'],
                            abilities: ['Void Immunity', 'Reality Manipulation']
                          },
                          
                          final_blow: {
                            title: 'Void Emperor Slayer',
                            unique_item: 'Crown of Reality Dominion',
                            transformation: 'Cosmic Guardian Form',
                            special_ability: 'Command Over Void'
                          }
                        }
                      }
                    ]
                  },
                  
                  // Advanced portal and travel system
                  portals: [
                    { 
                      id: 'cosmic_nexus',
                      name: 'Grand Cosmic Nexus Portal',
                      destinations: [
                        'void_dimension_prime',
                        'phoenix_realm_eternal',
                        'dragon_god_sanctuary',
                        'time_stream_nexus',
                        'reality_core_chamber'
                      ],
                      position: { x: 25000, y: 25000, z: 1000 },
                      requirements: { 
                        level: 200, 
                        access_keys: ['cosmic_passport'],
                        permissions: ['dimensional_travel']
                      },
                      usage_cost: { 
                        energy: 1000, 
                        cosmic_currency: 10000 
                      }
                    }
                  ],
                  
                  // Dynamic events system
                  events: {
                    scheduled: [
                      {
                        id: 'dragon_god_awakening',
                        name: 'The Great Dragon God Awakening',
                        type: 'realm_wide_event',
                        frequency: 'monthly',
                        duration: 86400000, // 24 hours
                        
                        phases: [
                          {
                            name: 'Divine Preparation',
                            duration: 21600000, // 6 hours
                            effects: ['Double EXP', 'Increased Magic']
                          },
                          {
                            name: 'God Awakening',
                            duration: 43200000, // 12 hours
                            effects: ['Dragon God Blessing', 'Reality Enhancement']
                          },
                          {
                            name: 'Divine Celebration',
                            duration: 21600000, // 6 hours
                            effects: ['Legendary Drop Rates', 'Free Enhancements']
                          }
                        ],
                        
                        rewards: {
                          participation: ['Dragon God Tokens', 'Divine Blessings'],
                          completion: ['Legendary Items', 'God Tier Enhancements'],
                          special: ['Dragon Transformation Scrolls', 'Reality Crystals']
                        }
                      }
                    ],
                    
                    random: [
                      {
                        type: 'reality_storm',
                        probability: 0.1, // per hour
                        duration: { min: 1800000, max: 7200000 }, // 30 minutes to 2 hours
                        effects: [
                          'Massive EXP bonus',
                          'Enhanced drop rates',
                          'Temporary god-like powers',
                          'Reality manipulation abilities'
                        ]
                      }
                    ]
                  }
                }
              }
            },
            
            void_dimension: {
              stability: 25,
              danger_level: 'extreme',
              physics: 'chaotic',
              magic_level: 'corrupted',
              
              description: 'A dimension where reality breaks down and void entities reign',
              
              effects_on_players: [
                'Gradual void corruption',
                'Reality perception distortion',
                'Enhanced void magic abilities',
                'Risk of existence erasure'
              ],
              
              unique_resources: [
                'Pure Void Essence',
                'Reality Fragments',
                'Existence Crystals',
                'Dimensional Tears'
              ]
            },
            
            time_dimension: {
              stability: 60,
              danger_level: 'very_high',
              physics: 'temporal',
              magic_level: 'time_based',
              
              unique_mechanics: [
                'Time flows differently in each area',
                'Past, present, future zones',
                'Temporal echoes of events',
                'Time loop traps'
              ]
            }
          }
        }
      },
      
      // Advanced weather and environmental system
      weatherSystem: {
        current: {
          type: 'aurora_storm',
          intensity: 'magnificent',
          duration: 7200000, // 2 hours
          
          effects: {
            visual: ['Aurora displays', 'Reality shimmer', 'Magic particle effects'],
            gameplay: [
              { effect: 'magic_power', multiplier: 2.5 },
              { effect: 'spell_cost', multiplier: 0.7 },
              { effect: 'mana_regen', multiplier: 3.0 },
              { effect: 'experience_gain', multiplier: 1.5 }
            ],
            environmental: [
              'Enhanced magical visibility',
              'Floating crystal formations',
              'Reality distortion zones'
            ]
          }
        },
        
        patterns: {
          seasonal: {
            'Dragon Summer': {
              dominant_weather: ['dragon_fire_winds', 'cosmic_clear', 'phoenix_aurora'],
              temperature_range: { min: 20, max: 35 },
              magic_influence: 'fire_and_dragon'
            },
            'Void Autumn': {
              dominant_weather: ['void_mists', 'reality_storms', 'dark_lightning'],
              effects: ['void_magic_enhancement', 'reality_distortion'],
              dangers: ['void_corruption_zones']
            }
          }
        }
      },
      
      // Enhanced time system
      timeSystem: {
        currentTime: 15.75, // 15:45 (3:45 PM)
        dayDuration: 3600000, // 1 hour real time = 24 hours game time
        
        phases: {
          current: 'golden_afternoon',
          
          definitions: {
            'cosmic_dawn': { start: 5, end: 7, effects: ['magic_awakening', 'reality_stabilization'] },
            'dragon_morning': { start: 7, end: 11, effects: ['dragon_power_boost', 'fire_magic_enhance'] },
            'golden_afternoon': { start: 11, end: 16, effects: ['exp_bonus', 'trading_boost'] },
            'phoenix_evening': { start: 16, end: 20, effects: ['healing_enhance', 'phoenix_magic_boost'] },
            'void_night': { start: 20, end: 24, effects: ['void_magic_enhance', 'stealth_bonus'] },
            'reality_midnight': { start: 0, end: 2, effects: ['reality_magic_peak', 'time_distortion'] },
            'dream_hour': { start: 2, end: 5, effects: ['meditation_bonus', 'psychic_abilities'] }
          }
        },
        
        calendar: {
          currentDay: 1247,
          currentMonth: 'Month of Dragon Ascension',
          currentYear: 5847,
          currentAge: 'Age of Infinite Possibilities',
          
          special_days: {
            'Dragon God Festival': { frequency: 'monthly', day: 15, effects: ['dragon_blessing'] },
            'Void Convergence': { frequency: 'quarterly', effects: ['void_power_surge'] },
            'Reality Celebration': { frequency: 'yearly', effects: ['reality_enhancement'] }
          }
        }
      },
      
      // Global events and phenomena
      globalEvents: {
        active: [
          {
            id: 'cosmic_alignment',
            name: 'The Great Cosmic Alignment of Infinite Power',
            type: 'universal_phenomenon',
            duration: 172800000, // 48 hours
            participants: 25847,
            
            effects: {
              global: [
                'All stats +100%',
                'Experience gain +500%',
                'Drop rates +1000%',
                'Skill learning speed +300%'
              ],
              special: [
                'Unlock hidden abilities',
                'Access to cosmic dimensions',
                'Enhanced equipment upgrade chances',
                'Reality manipulation opportunities'
              ]
            },
            
            phases: [
              { name: 'Cosmic Awakening', progress: 100 },
              { name: 'Universal Harmony', progress: 75 },
              { name: 'Infinite Convergence', progress: 0 }
            ],
            
            rewards: {
              tier1: { participants: 1000, reward: 'Cosmic Blessing' },
              tier2: { participants: 100, reward: 'Universal Enhancement' },
              tier3: { participants: 10, reward: 'Reality Controller Status' },
              ultimate: { participants: 1, reward: 'Cosmic God Transformation' }
            }
          }
        ],
        
        scheduled: [
          {
            id: 'dimensional_convergence',
            name: 'Dimensional Convergence War',
            type: 'multi_dimensional_pvp',
            schedule: 'weekly_saturday_20:00',
            duration: 14400000, // 4 hours
            description: 'Epic battles across multiple dimensions',
            
            requirements: {
              level: 200,
              guild_membership: true,
              dimensional_access: true
            }
          }
        ]
      },
      
      // Economic system
      economy: {
        globalMarket: {
          inflation_rate: 1.05,
          major_currencies: [
            { name: 'Gold', exchange_rate: 1.0, stability: 'stable' },
            { name: 'Platinum', exchange_rate: 100, stability: 'rising' },
            { name: 'Divinity Points', exchange_rate: 10000, stability: 'volatile' },
            { name: 'Reality Crystals', exchange_rate: 1000000, stability: 'rare' }
          ],
          
          trade_routes: [
            {
              from: 'Dragon Empire',
              to: 'Void Territories',
              goods: ['Dragon Scales', 'Fire Crystals'],
              profit_margin: 250,
              risk_level: 'high'
            }
          ]
        },
        
        auction_house: {
          categories: [
            'Legendary Weapons', 'Mythic Armor', 'Transcendent Accessories',
            'God Tier Items', 'Reality Manipulators', 'Cosmic Artifacts'
          ],
          
          featured_items: [
            {
              name: 'Dragon God Sword Fragment',
              current_bid: 50000000,
              time_remaining: 86400000, // 24 hours
              bidders: 247
            }
          ]
        }
      }
    },
    
    // ======================== ENHANCED UI AND INTERACTION SYSTEM ========================
    ui: {
      activeWindows: new Set(['character_status', 'minimap']),
      windowConfigurations: new Map(),
      
      themes: {
        current: 'dragon_emperor',
        available: [
          'dragon_emperor', 'void_master', 'cosmic_wanderer',
          'phoenix_eternal', 'reality_controller', 'time_weaver'
        ]
      },
      
      interface: {
        scale: 1.2,
        opacity: 0.95,
        animation_speed: 1.5,
        particle_effects: true,
        advanced_tooltips: true,
        contextual_help: true
      },
      
      notifications: {
        queue: [],
        filters: {
          combat: true,
          social: true,
          system: true,
          achievement: true,
          market: true
        },
        sound_effects: true
      },
      
      chat_system: {
        channels: [
          'Global', 'Guild', 'Party', 'Trade', 'Help',
          'Dragon_Council', 'Void_Research', 'Cosmic_Events'
        ],
        active_channel: 'Guild',
        message_history: new Map(),
        filters: {
          profanity: true,
          spam: true,
          foreign_languages: false
        }
      },
      
      advanced_hud: {
        combat_tracker: {
          enabled: true,
          show_damage_numbers: true,
          show_healing_numbers: true,
          show_buff_timers: true,
          show_cooldown_spirals: true
        },
        
        minimap: {
          zoom_level: 1.5,
          show_players: true,
          show_npcs: true,
          show_monsters: true,
          show_resources: true,
          show_quests: true,
          transparency: 0.8
        },
        
        status_bars: {
          style: 'gradient_animated',
          show_numbers: true,
          show_percentages: true,
          color_coding: true,
          warning_thresholds: { hp: 30, mp: 20, sp: 25 }
        }
      },
      
      accessibility: {
        colorblind_support: true,
        high_contrast: false,
        large_text: false,
        screen_reader_support: true,
        keyboard_navigation: true
      }
    },
    
    // ======================== ADVANCED COMBAT SYSTEM ========================
    combat: {
      mode: 'advanced_tactical',
      inCombat: false,
      combatState: 'peaceful',
      
      targeting: {
        current: null,
        queue: [],
        auto_target: true,
        smart_targeting: true,
        target_priority: ['boss', 'elite', 'aggressive', 'weakest']
      },
      
      damage_system: {
        calculation_mode: 'complex',
        factors: [
          'base_stats', 'equipment_stats', 'skill_bonuses',
          'buff_effects', 'environmental_factors', 'random_variance',
          'critical_hits', 'elemental_interactions', 'armor_penetration'
        ],
        
        damage_types: [
          'physical', 'magical', 'elemental', 'void', 'divine',
          'psychic', 'temporal', 'dimensional', 'existence'
        ]
      },
      
      combat_mechanics: {
        turn_based: false,
        real_time: true,
        action_queuing: true,
        interrupt_system: true,
        counter_attacks: true,
        combination_attacks: true,
        environmental_usage: true
      },
      
      battle_analytics: {
        dps_tracking: true,
        damage_breakdown: true,
        efficiency_analysis: true,
        performance_suggestions: true,
        combat_replay: true
      },
      
      ai_behavior: {
        enemy_intelligence: 'advanced',
        learning_enemies: true,
        adaptive_strategies: true,
        group_coordination: true,
        environmental_usage: true
      }
    },
    
    // ======================== COMPLEX QUEST SYSTEM ========================
    quests: {
      active: [
        {
          id: 'transcendent_dragon_prophecy',
          title: 'The Transcendent Dragon Prophecy of Ultimate Destiny',
          type: 'main_epic_saga',
          chapter: 25,
          act: 3,
          tier: 'cosmic',
          
          description: 'Fulfill the ancient prophecy to become the Ultimate Dragon God Emperor',
          
          storyline: {
            background: 'An ancient prophecy speaks of one who will unite all realms under dragon rule',
            current_situation: 'The void threatens to consume reality itself',
            stakes: 'The survival of all existence hangs in the balance'
          },
          
          objectives: [
            {
              id: 'obj_1',
              description: 'Obtain the Seven Dragon God Artifacts',
              type: 'collection',
              progress: 6,
              max_progress: 7,
              completed: false,
              
              sub_objectives: [
                { item: 'Crown of Dragon Dominion', obtained: true },
                { item: 'Sword of Reality Cutting', obtained: true },
                { item: 'Shield of Existence Protection', obtained: true },
                { item: 'Ring of Time Mastery', obtained: true },
                { item: 'Amulet of Space Control', obtained: true },
                { item: 'Gauntlets of Creation Power', obtained: true },
                { item: 'Boots of Infinite Journey', obtained: false }
              ]
            },
            
            {
              id: 'obj_2',
              description: 'Defeat the Seven Void Lords of Destruction',
              type: 'elimination',
              progress: 5,
              max_progress: 7,
              completed: false,
              
              targets: [
                { name: 'Void Lord of Despair', defeated: true, location: 'Despair Dimension' },
                { name: 'Void Lord of Chaos', defeated: true, location: 'Chaos Realm' },
                { name: 'Void Lord of Destruction', defeated: true, location: 'Destruction Plane' },
                { name: 'Void Lord of Madness', defeated: true, location: 'Madness Domain' },
                { name: 'Void Lord of Entropy', defeated: true, location: 'Entropy Void' },
                { name: 'Void Lord of Oblivion', defeated: false, location: 'Oblivion Depths' },
                { name: 'Supreme Void Emperor', defeated: false, location: 'Heart of Void' }
              ]
            },
            
            {
              id: 'obj_3',
              description: 'Unite the Seven Great Realms under Dragon Rule',
              type: 'diplomacy_conquest',
              progress: 4,
              max_progress: 7,
              completed: false,
              
              realms: [
                { name: 'Dragon Realm', status: 'ruled', method: 'inheritance' },
                { name: 'Phoenix Realm', status: 'allied', method: 'marriage_contract' },
                { name: 'Void Realm', status: 'conquered', method: 'military_victory' },
                { name: 'Time Realm', status: 'allied', method: 'mutual_respect' },
                { name: 'Cosmic Realm', status: 'neutral', method: 'pending' },
                { name: 'Divine Realm', status: 'hostile', method: 'pending' },
                { name: 'Mortal Realm', status: 'neutral', method: 'pending' }
              ]
            }
          ],
          
          rewards: {
            experience: 100000000,
            gold: 500000000,
            
            items: [
              'Ultimate Dragon God Transformation',
              'Crown of Universal Dominion',
              'Scepter of Reality Control',
              'Throne of Infinite Power'
            ],
            
            titles: [
              'Dragon God Emperor',
              'Master of All Realms',
              'Controller of Reality',
              'Ultimate Existence'
            ],
            
            abilities: [
              'Universal Command',
              'Reality Rewriting',
              'Existence Creation',
              'Infinite Power'
            ],
            
            special: [
              'Personal Universe Creation',
              'God-Tier Status',
              'Cosmic Influence',
              'Immortal Godhood'
            ]
          },
          
          time_limit: null,
          estimated_completion: '200+ hours',
          difficulty: 'impossible',
          solo_capable: true,
          group_recommended: false
        },
        
        {
          id: 'guild_cosmic_conquest',
          title: 'Cosmic Conquest: Dominate the Universe',
          type: 'guild_mega_project',
          tier: 'transcendent',
          
          description: 'Lead your guild to conquer and rule the entire cosmic realm',
          
          requirements: {
            guild_level: 40,
            guild_members: 300,
            guild_power: 10000000,
            completed_wars: 50
          },
          
          phases: [
            {
              name: 'Cosmic Preparation',
              description: 'Prepare guild for cosmic warfare',
              duration: '30 days',
              objectives: ['Build Cosmic Fleet', 'Train Elite Army', 'Forge Cosmic Weapons']
            },
            {
              name: 'Dimensional Assault',
              description: 'Launch coordinated attacks across dimensions',
              duration: '60 days',
              objectives: ['Conquer 50 Dimensions', 'Establish Forward Bases', 'Secure Supply Lines']
            },
            {
              name: 'Universal Dominion',
              description: 'Establish absolute rule over cosmic realm',
              duration: '90 days',
              objectives: ['Crown Cosmic Emperor', 'Establish New Order', 'Rule Universe']
            }
          ],
          
          participant_count: 500,
          progress: 35,
          
          rewards: {
            guild_bonuses: [
              'Cosmic Guild Status',
              '+1000% All Guild Bonuses',
              'Universal Territory Control',
              'Cosmic Resource Generation'
            ],
            
            member_rewards: [
              'Cosmic Conqueror Title',
              'Universal Citizen Status',
              'Cosmic Equipment Set',
              'Reality Manipulation License'
            ]
          }
        }
      ],
      
      completed: 2847,
      
      daily_quests: [
        {
          id: 'cosmic_daily_001',
          title: 'Slay 1000 Cosmic Entities',
          type: 'elimination',
          tier: 'cosmic',
          progress: 756,
          max_progress: 1000,
          
          rewards: {
            experience: 5000000,
            gold: 1000000,
            cosmic_currency: 50000,
            items: ['Cosmic Enhancement Stones']
          },
          
          reset_time: 86400000 // 24 hours
        },
        
        {
          id: 'reality_daily_001',
          title: 'Stabilize 100 Reality Rifts',
          type: 'repair',
          tier: 'transcendent',
          progress: 67,
          max_progress: 100,
          
          rewards: {
            experience: 3000000,
            reality_fragments: 500,
            titles: ['Reality Stabilizer']
          }
        }
      ],
      
      weekly_challenges: [
        {
          id: 'dimensional_weekly_001',
          title: 'Complete 50 Dimensional Raids',
          type: 'raid',
          tier: 'mythic',
          progress: 32,
          max_progress: 50,
          
          rewards: {
            experience: 50000000,
            dimensional_keys: 100,
            unique_items: ['Dimensional Mastery Ring'],
            abilities: ['Advanced Dimensional Travel']
          },
          
          reset_time: 604800000 // 7 days
        }
      ],
      
      legendary_quest_chains: [
        {
          id: 'dragon_god_ascension',
          name: 'Path to Dragon God Ascension',
          quests_in_chain: 25,
          completed_quests: 23,
          estimated_time: '500+ hours',
          
          final_reward: {
            transformation: 'True Dragon God Form',
            unique_abilities: ['Divine Dragon Powers'],
            cosmic_status: 'Minor Deity'
          }
        }
      ]
    },
    
    // ======================== ADVANCED INVENTORY SYSTEM ========================
    inventory: {
      capacity: {
        total: 1000,
        used: 756,
        available: 244,
        expandable: true,
        max_expansion: 5000
      },
      
      organization: {
        tabs: [
          'All Items', 'Weapons', 'Armor', 'Accessories', 
          'Consumables', 'Materials', 'Quest Items', 
          'Artifacts', 'Cosmic Items', 'Favorites'
        ],
        
        filters: {
          rarity: 'all',
          type: 'all',
          level_range: { min: 1, max: 999 },
          search_term: '',
          show_only_usable: false,
          show_only_tradeable: false
        },
        
        sorting: {
          method: 'rarity_desc',
          options: [
            'name_asc', 'name_desc', 'level_asc', 'level_desc',
            'rarity_asc', 'rarity_desc', 'type_asc', 'type_desc',
            'value_asc', 'value_desc', 'recent_asc', 'recent_desc'
          ]
        }
      },
      
      items: [
        // Transcendent Weapons
        {
          id: 'ultimate_reality_sword',
          name: 'Ultimate Reality Breaker - Genesis Infinity Edge +99',
          type: 'weapon',
          subtype: 'transcendent_sword',
          rarity: 'beyond_artifact',
          tier: 'cosmic_supreme',
          quantity: 1,
          stack_size: 1,
          
          level_requirement: 250,
          
          stats: {
            attack: { min: 500000, max: 999999 },
            critical_rate: 95,
            critical_damage: 850,
            penetration: 99999,
            accuracy: 100,
            attack_speed: 350
          },
          
          special_properties: [
            'Ignores all forms of defense',
            'Cuts through dimensions',
            'Reality manipulation on hit',
            'Soul damage component',
            'Time distortion effects',
            'Existence threatening power'
          ],
          
          enchantments: [
            { name: 'Dragon God Slayer', level: 99, effect: 'Infinite damage vs dragons' },
            { name: 'Reality Cutter', level: 99, effect: 'Cut through reality itself' },
            { name: 'Void Annihilator', level: 99, effect: 'Destroy void entities instantly' },
            { name: 'Time Severer', level: 99, effect: 'Cut through time streams' },
            { name: 'Existence Ender', level: 99, effect: 'Threaten existence itself' }
          ],
          
          gem_sockets: [
            { socket: 1, gem: 'Infinity Reality Diamond', effect: '+999999 all damage types' },
            { socket: 2, gem: 'Cosmic Time Crystal', effect: 'Infinite attack speed' },
            { socket: 3, gem: 'Universal Chaos Emerald', effect: '+99999% critical damage' },
            { socket: 4, gem: 'Dragon God Ruby', effect: 'All attacks are critical' },
            { socket: 5, gem: 'Void Master Sapphire', effect: 'Ignore all resistances' }
          ],
          
          unique_abilities: [
            {
              name: 'Genesis Reality Slash',
              description: 'Cut through the fabric of reality itself',
              damage_multiplier: 10000,
              cooldown: 3600000, // 1 hour
              area_effect: 'universe_wide'
            },
            
            {
              name: 'Infinite Sword Storm',
              description: 'Unleash infinite sword projections',
              duration: 60000, // 1 minute
              effect: 'Each attack creates 1000 sword copies',
              cooldown: 1800000 // 30 minutes
            }
          ],
          
          evolution: {
            current_stage: 10,
            max_stage: 15,
            next_requirements: {
              materials: ['Universal Essence: 100', 'Reality Cores: 50'],
              achievements: ['Slay 1000 Gods'],
              cost: 1000000000
            }
          },
          
          lore: 'Forged from the condensed essence of a dying universe, this blade transcends the very concept of weaponry',
          
          market_value: 999999999999,
          tradeable: false,
          destroyable: false,
          soulbound: true,
          account_bound: true
        },
        
        // God-Tier Armor Set
        {
          id: 'cosmic_emperor_crown',
          name: 'Crown of the Cosmic Dragon Emperor +99',
          type: 'armor',
          subtype: 'helmet',
          rarity: 'cosmic_unique',
          tier: 'beyond_transcendent',
          quantity: 1,
          
          set_name: 'Cosmic Dragon Emperor Divine Set',
          set_piece: '1/7',
          
          stats: {
            defense: { physical: 999999, magical: 999999, all_types: 500000 },
            health: 10000000,
            mana: 8000000,
            all_resistances: 99,
            special_resistances: { reality_damage: 100, existence_erasure: 95 }
          },
          
          special_abilities: [
            'Omniscient Vision - See all hidden things',
            'Mind Control Immunity',
            'Thought Reading - Read minds of all beings',
            'Universal Translation - Understand all languages',
            'Divine Wisdom - Access to cosmic knowledge'
          ],
          
          aura_effects: [
            'Leadership +10000 to all allies within 10000 meters',
            'Fear immunity to all allies',
            'Inspiration aura - +500% stats to guild members'
          ]
        },
        
        // Ultimate Consumables
        {
          id: 'cosmic_god_elixir',
          name: 'Elixir of Cosmic God Ascension',
          type: 'consumable',
          subtype: 'transformation_potion',
          rarity: 'unique_cosmic',
          quantity: 5,
          stack_size: 10,
          
          effects: [
            {
              name: 'Temporary God Status',
              duration: 3600000, // 1 hour
              benefits: [
                'All stats become infinite',
                'Immunity to all damage',
                'Reality manipulation powers',
                'Time control abilities',
                'Dimensional travel mastery'
              ]
            }
          ],
          
          usage_restrictions: {
            cooldown: 86400000, // 24 hours
            max_uses_per_day: 1,
            requires_level: 200,
            requires_achievement: 'Cosmic Warrior'
          },
          
          market_value: 100000000,
          tradeable: true,
          
          crafting_recipe: {
            materials: [
              { item: 'Divine Essence', quantity: 100 },
              { item: 'Cosmic Dust', quantity: 50 },
              { item: 'Reality Fragments', quantity: 25 },
              { item: 'God Blood', quantity: 10 }
            ],
            success_rate: 1, // 1%
            crafting_skill: 'Divine Alchemy',
            skill_level: 200
          }
        },
        
        // Legendary Crafting Materials
        {
          id: 'reality_core_fragment',
          name: 'Fragment of Reality\'s Core',
          type: 'material',
          subtype: 'cosmic_essence',
          rarity: 'beyond_legendary',
          quantity: 25,
          stack_size: 999,
          
          description: 'A fragment of the core that holds reality together',
          
          uses: [
            'Ultimate Equipment Enhancement',
            'Reality Manipulation Device Creation',
            'Dimensional Gateway Construction',
            'God-Tier Item Synthesis'
          ],
          
          market_value: 50000000,
          
          sources: [
            'Defeat Reality Guardians',
            'Complete Cosmic Events',
            'Dismantle Reality Rifts',
            'Trade with Cosmic Entities'
          ]
        }
      ],
      
      quick_access: {
        hotbar_slots: 20,
        hotbar_pages: 5,
        
        configured_slots: [
          { slot: 1, item: 'cosmic_god_elixir', auto_use: false },
          { slot: 2, item: 'reality_manipulation_scroll', auto_use: false },
          { slot: 3, item: 'instant_teleport_stone', auto_use: true },
          { slot: 4, item: 'divine_healing_potion', auto_use: true, threshold: 30 }
        ]
      },
      
      auto_management: {
        auto_sort: true,
        auto_sell: {
          enabled: true,
          rarity_threshold: 'rare',
          value_threshold: 10000,
          keep_count: 50
        },
        
        auto_use: {
          healing_potions: { enabled: true, hp_threshold: 25 },
          mana_potions: { enabled: true, mp_threshold: 20 },
          buff_items: { enabled: true, duration_threshold: 30 }
        }
      },
      
      storage_expansion: {
        personal_vault: {
          capacity: 5000,
          cost_per_slot: 100000,
          max_expansions: 20
        },
        
        guild_storage: {
          access_level: 'supreme_commander',
          contribution_space: 10000,
          shared_space: 50000
        },
        
        dimensional_storage: {
          capacity: 999999,
          requires: 'Dimensional Mastery Skill',
          cost: 'Reality Fragments'
        }
      }
    },
    
    // ======================== SOCIAL SYSTEM ========================
    social: {
      friends: {
        list: [
          {
            id: 'phoenix_empress_luna',
            name: 'Phoenix Empress Luna',
            status: 'online',
            location: 'Cosmic Phoenix Realm',
            level: 287,
            relationship: 'best_friend',
            shared_activities: ['Guild Wars', 'Cosmic Raids', 'Reality Exploration']
          },
          
          {
            id: 'void_master_shadow',
            name: 'Void Master Shadow',
            status: 'in_combat',
            location: 'Void Dimension Deep',
            level: 298,
            relationship: 'rival_friend',
            note: 'Friendly rivalry in void mastery'
          }
        ],
        
        pending_requests: 15,
        blocked_users: 3,
        max_friends: 500
      },
      
      guild_social: {
        active_members: 287,
        guild_chat_history: new Map(),
        
        member_roles: {
          'Supreme God Emperor': 1, // You
          'Dragon Lords': 5,
          'Void Masters': 10,
          'Phoenix Commanders': 15,
          'Elite Members': 75,
          'Members': 181
        },
        
        guild_activities: [
          {
            type: 'Guild War',
            participants: 150,
            status: 'active',
            enemy: 'Shadow Empire Guild'
          },
          
          {
            type: 'Cosmic Raid',
            participants: 50,
            status: 'preparing',
            target: 'Dimensional Void Lord'
          }
        ]
      },
      
      mentorship: {
        apprentices: [
          {
            name: 'Rising Dragon Warrior',
            level: 89,
            progress: 'Advanced Combat Training',
            relationship: 95
          }
        ],
        
        teaching_bonuses: {
          experience_sharing: 150, // 150% bonus exp when teaching
          skill_transfer: 'advanced',
          legacy_building: true
        }
      }
    }
  });

  // ======================== VISUAL EFFECTS AND ANIMATIONS ========================
  const [activeEffects, setActiveEffects] = useState([]);
  const [damageNumbers, setDamageNumbers] = useState([]);
  const [screenShake, setScreenShake] = useState(0);
  const [weatherEffects, setWeatherEffects] = useState([]);

  // ======================== GAME MECHANICS AND FUNCTIONS ========================
  
  // Advanced ID generation
  const generateUniqueId = useCallback(() => {
    return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}_${performance.now()}`;
  }, []);

  // Enhanced notification system
  const addAdvancedNotification = useCallback((config) => {
    const notification = {
      id: generateUniqueId(),
      message: config.message,
      type: config.type || 'info',
      tier: config.tier || 'normal',
      timestamp: Date.now(),
      duration: config.duration || 5000,
      priority: config.priority || 1,
      sound: config.sound || null,
      animation: config.animation || 'slide_in',
      actions: config.actions || []
    };
    
    setGameState(prev => ({
      ...prev,
      ui: {
        ...prev.ui,
        notifications: {
          ...prev.ui.notifications,
          queue: [notification, ...prev.ui.notifications.queue.slice(0, 19)]
        }
      }
    }));

    // Auto-remove after duration
    setTimeout(() => {
      setGameState(prev => ({
        ...prev,
        ui: {
          ...prev.ui,
          notifications: {
            ...prev.ui.notifications,
            queue: prev.ui.notifications.queue.filter(n => n.id !== notification.id)
          }
        }
      }));
    }, notification.duration);
  }, [generateUniqueId]);

  // Complex damage calculation
  const calculateDamage = useCallback((attacker, target, skill, environmental_factors = {}) => {
    // Base damage calculation
    let baseDamage = 0;
    
    if (skill.type.includes('physical')) {
      baseDamage = Math.random() * (attacker.attack.physical.max - attacker.attack.physical.min) + attacker.attack.physical.min;
    } else if (skill.type.includes('magical')) {
      baseDamage = Math.random() * (attacker.attack.magical.max - attacker.attack.magical.min) + attacker.attack.magical.min;
    }
    
    // Add skill damage
    if (skill.damage) {
      baseDamage += Math.random() * (skill.damage.max - skill.damage.min) + skill.damage.min;
    }
    
    // Critical hit calculation
    const critRoll = Math.random() * 100;
    const isCritical = critRoll < attacker.combat.critRate;
    if (isCritical) {
      baseDamage *= (attacker.combat.critDamage / 100);
    }
    
    // Defense calculation
    let defense = 0;
    if (skill.type.includes('physical')) {
      defense = target.defense.physical.armor;
    } else if (skill.type.includes('magical')) {
      defense = target.defense.magical.resistance;
    }
    
    // Penetration
    const penetration = attacker.attack.physical?.penetration || attacker.attack.magical?.penetration || 0;
    const effectiveDefense = Math.max(0, defense - penetration);
    
    // Resistance calculation
    let resistance = 0;
    if (skill.element && target.resistances && target.resistances[skill.element]) {
      resistance = target.resistances[skill.element];
    }
    
    // Environmental factors
    let environmentalMultiplier = 1.0;
    if (environmental_factors.weather_bonus) {
      environmentalMultiplier *= environmental_factors.weather_bonus;
    }
    if (environmental_factors.terrain_bonus) {
      environmentalMultiplier *= environmental_factors.terrain_bonus;
    }
    
    // Final damage calculation
    const defenseReduction = effectiveDefense / (effectiveDefense + 1000);
    const resistanceReduction = resistance / 100;
    
    let finalDamage = baseDamage * (1 - defenseReduction) * (1 - resistanceReduction) * environmentalMultiplier;
    
    // Special effects
    const effects = [];
    if (isCritical) effects.push('critical');
    if (skill.effects) effects.push(...skill.effects);
    
    return {
      damage: Math.floor(finalDamage),
      critical: isCritical,
      effects: effects,
      breakdown: {
        base: Math.floor(baseDamage),
        critical_multiplier: isCritical ? attacker.combat.critDamage / 100 : 1,
        defense_reduction: defenseReduction,
        resistance_reduction: resistanceReduction,
        environmental_multiplier: environmentalMultiplier
      }
    };
  }, []);

  // Enhanced movement with collision detection and physics
  const movePlayer = useCallback((direction, distance = 25, sprint = false) => {
    setGameState(prev => {
      const currentMap = prev.world.universes.prime_reality.dimensions.material_plane.realms[prev.player.currentRegion];
      if (!currentMap) return prev;

      const newPosition = { ...prev.player.position };
      const speed = prev.player.derivedStats.combat.moveSpeed;
      const sprintMultiplier = sprint ? 2.5 : 1.0;
      const actualDistance = distance * (speed / 3000) * sprintMultiplier;
      
      // Stamina consumption for sprinting
      if (sprint && prev.player.derivedStats.sp.current > 50) {
        prev.player.derivedStats.sp.current -= 25;
      } else if (sprint) {
        sprint = false; // Can't sprint without stamina
      }
      
      // Calculate new position based on direction
      switch(direction) {
        case 'up':
        case 'north':
          newPosition.y = Math.max(0, newPosition.y - actualDistance);
          newPosition.facing = 'north';
          break;
        case 'down':
        case 'south':
          newPosition.y = Math.min(currentMap.size.height, newPosition.y + actualDistance);
          newPosition.facing = 'south';
          break;
        case 'left':
        case 'west':
          newPosition.x = Math.max(0, newPosition.x - actualDistance);
          newPosition.facing = 'west';
          break;
        case 'right':
        case 'east':
          newPosition.x = Math.min(currentMap.size.width, newPosition.x + actualDistance);
          newPosition.facing = 'east';
          break;
        case 'northeast':
          newPosition.x = Math.min(currentMap.size.width, newPosition.x + actualDistance * 0.707);
          newPosition.y = Math.max(0, newPosition.y - actualDistance * 0.707);
          newPosition.facing = 'northeast';
          break;
        case 'northwest':
          newPosition.x = Math.max(0, newPosition.x - actualDistance * 0.707);
          newPosition.y = Math.max(0, newPosition.y - actualDistance * 0.707);
          newPosition.facing = 'northwest';
          break;
        case 'southeast':
          newPosition.x = Math.min(currentMap.size.width, newPosition.x + actualDistance * 0.707);
          newPosition.y = Math.min(currentMap.size.height, newPosition.y + actualDistance * 0.707);
          newPosition.facing = 'southeast';
          break;
        case 'southwest':
          newPosition.x = Math.max(0, newPosition.x - actualDistance * 0.707);
          newPosition.y = Math.min(currentMap.size.height, newPosition.y + actualDistance * 0.707);
          newPosition.facing = 'southwest';
          break;
        case 'up_z':
          newPosition.z = Math.min(currentMap.size.depth || 10000, newPosition.z + actualDistance);
          break;
        case 'down_z':
          newPosition.z = Math.max(0, newPosition.z - actualDistance);
          break;
        default:
          return prev;
      }

      // Collision detection with NPCs
      const nearbyNPCs = currentMap.npcs.filter(npc => {
        const distance = Math.sqrt(
          Math.pow(npc.position.x - newPosition.x, 2) + 
          Math.pow(npc.position.y - newPosition.y, 2) +
          Math.pow((npc.position.z || 0) - newPosition.z, 2)
        );
        return distance < 100;
      });

      // Collision detection with monsters
      const nearbyMonsters = Object.values(currentMap.monsters).flat().filter(monster => {
        const distance = Math.sqrt(
          Math.pow(monster.position?.x - newPosition.x, 2) + 
          Math.pow(monster.position?.y - newPosition.y, 2) +
          Math.pow((monster.position?.z || 0) - newPosition.z, 2)
        );
        return distance < 150;
      });

      // Update position
      return {
        ...prev,
        player: {
          ...prev.player,
          position: newPosition
        }
      };
    });
  }, []);

  // Advanced skill usage system
  const useAdvancedSkill = useCallback((skillId, target = null, position = null) => {
    setGameState(prev => {
      const skill = prev.player.skills.activeSkills.find(s => s.id === skillId);
      if (!skill) {
        addAdvancedNotification({
          message: 'Skill not found!',
          type: 'error',
          tier: 'high'
        });
        return prev;
      }
      
      // Check cooldown
      if (prev.player.skills.cooldowns.has(skillId)) {
        const remainingCooldown = Math.ceil(prev.player.skills.cooldowns.get(skillId) / 1000);
        addAdvancedNotification({
          message: `${skill.name} on cooldown: ${remainingCooldown}s`,
          type: 'warning',
          tier: 'medium'
        });
        return prev;
      }
      
      // Check resource costs
      const costs = skill.cost;
      const player = prev.player;
      
      if (costs.mp && player.derivedStats.mp.current < costs.mp) {
        addAdvancedNotification({
          message: 'Not enough mana!',
          type: 'error',
          tier: 'high'
        });
        return prev;
      }
      
      if (costs.sp && player.derivedStats.sp.current < costs.sp) {
        addAdvancedNotification({
          message: 'Not enough stamina!',
          type: 'error',
          tier: 'high'
        });
        return prev;
      }
      
      if (costs.energy && player.derivedStats.energy.current < costs.energy) {
        addAdvancedNotification({
          message: 'Not enough energy!',
          type: 'error',
          tier: 'high'
        });
        return prev;
      }

      // Check requirements
      if (skill.requirements) {
        const req = skill.requirements;
        if (req.level && player.level < req.level) {
          addAdvancedNotification({
            message: `Requires level ${req.level}!`,
            type: 'error'
          });
          return prev;
        }
      }

      // Consume resources
      const newState = { ...prev };
      if (costs.mp) {
        newState.player.derivedStats.mp.current = Math.max(0, newState.player.derivedStats.mp.current - costs.mp);
      }
      if (costs.sp) {
        newState.player.derivedStats.sp.current = Math.max(0, newState.player.derivedStats.sp.current - costs.sp);
      }
      if (costs.energy) {
        newState.player.derivedStats.energy.current = Math.max(0, newState.player.derivedStats.energy.current - costs.energy);
      }

      // Apply cooldown
      if (skill.cooldown > 0) {
        const newCooldowns = new Map(newState.player.skills.cooldowns);
        newCooldowns.set(skillId, skill.cooldown * 1000); // Convert to milliseconds
        newState.player.skills.cooldowns = newCooldowns;
      }

      // Calculate damage if applicable
      let damageResult = null;
      if (skill.damage) {
        damageResult = calculateDamage(
          {
            attack: newState.player.derivedStats.attack,
            combat: newState.player.derivedStats.combat
          },
          target || { defense: { physical: { armor: 0 }, magical: { resistance: 0 } }, resistances: {} },
          skill
        );
      }

      // Create visual effect
      const effect = {
        id: generateUniqueId(),
        type: 'skill_cast',
        skill: skill,
        position: position || { ...newState.player.position },
        caster: 'player',
        damage: damageResult?.damage || 0,
        critical: damageResult?.critical || false,
        duration: skill.animations?.effect || 3000,
        tier: skill.tier
      };

      setActiveEffects(prev => [...prev, effect]);

      // Screen shake for powerful skills
      if (skill.tier === 'cosmic' || skill.tier === 'transcendent') {
        setScreenShake(skill.tier === 'cosmic' ? 15 : 10);
        setTimeout(() => setScreenShake(0), 500);
      }

      // Add damage numbers
      if (damageResult && damageResult.damage > 0) {
        const damageNum = {
          id: generateUniqueId(),
          damage: damageResult.damage,
          position: { 
            x: (position?.x || newState.player.position.x) + Math.random() * 100 - 50,
            y: (position?.y || newState.player.position.y) - 50
          },
          type: 'skill_damage',
          critical: damageResult.critical,
          tier: skill.tier,
          element: skill.element,
          timestamp: Date.now()
        };
        setDamageNumbers(prev => [...prev, damageNum]);
        
        setTimeout(() => {
          setDamageNumbers(prev => prev.filter(d => d.id !== damageNum.id));
        }, 3000);
      }

      // Remove effect after duration
      setTimeout(() => {
        setActiveEffects(prev => prev.filter(e => e.id !== effect.id));
      }, effect.duration);

      // Notification
      addAdvancedNotification({
        message: `✨ Cast ${skill.name}${damageResult?.critical ? ' (CRITICAL!)' : ''}!`,
        type: 'success',
        tier: skill.tier === 'cosmic' ? 'legendary' : 'high',
        duration: 3000
      });

      return newState;
    });
  }, [calculateDamage, addAdvancedNotification, generateUniqueId]);

  // Enhanced monster AI and combat engagement
  const engageAdvancedCombat = useCallback((monsterId, monster) => {
    if (!monster) return;

    setGameState(prev => {
      // Complex AI decision making
      const playerThreatLevel = prev.player.level * 1000 + prev.player.derivedStats.combat.moveSpeed;
      const monsterAggression = monster.ai_behavior === 'highly_aggressive' ? 2.0 : 1.0;
      
      // Monster attacks player
      const monsterDamage = calculateDamage(
        {
          attack: { 
            physical: { min: monster.stats.attack.min, max: monster.stats.attack.max },
            magical: { min: monster.stats.attack.min * 0.8, max: monster.stats.attack.max * 0.8 }
          },
          combat: { critRate: 15, critDamage: 200 }
        },
        {
          defense: prev.player.derivedStats.defense,
          resistances: prev.player.derivedStats.resistances
        },
        { type: 'physical', element: 'none' }
      );

      // Apply damage to player
      const newPlayerHp = Math.max(0, prev.player.derivedStats.hp.current - monsterDamage.damage);
      
      // Player counter-attack
      const playerDamage = calculateDamage(
        {
          attack: prev.player.derivedStats.attack,
          combat: prev.player.derivedStats.combat
        },
        {
          defense: { 
            physical: { armor: monster.stats.defense.min },
            magical: { resistance: monster.stats.defense.min * 0.7 }
          },
          resistances: {}
        },
        { type: 'physical', element: 'none' }
      );

      // Apply damage to monster
      const newMonsterHp = Math.max(0, monster.stats.hp.current - playerDamage.damage);

      // Update monster
      monster.stats.hp.current = newMonsterHp;

      // Create damage numbers for both
      const playerDamageNum = {
        id: generateUniqueId(),
        damage: monsterDamage.damage,
        position: { ...prev.player.position },
        type: 'incoming_damage',
        critical: monsterDamage.critical,
        timestamp: Date.now()
      };

      const monsterDamageNum = {
        id: generateUniqueId(),
        damage: playerDamage.damage,
        position: { ...monster.position },
        type: 'outgoing_damage',
        critical: playerDamage.critical,
        timestamp: Date.now()
      };

      setDamageNumbers(prev => [...prev, playerDamageNum, monsterDamageNum]);

      // Check for deaths
      if (newMonsterHp <= 0) {
        // Monster defeated
        const expGain = monster.level * 10000 + Math.floor(Math.random() * 50000);
        const goldGain = monster.level * 1000 + Math.floor(Math.random() * 10000);

        addAdvancedNotification({
          message: `🗡️ Defeated ${monster.name}! +${expGain.toLocaleString()} EXP, +${goldGain.toLocaleString()} Gold`,
          type: 'success',
          tier: 'high',
          duration: 5000
        });

        // Add rewards
        const newState = { ...prev };
        newState.player.experience += expGain;
        newState.player.resources.primary.gold += goldGain;

        // Check level up
        if (newState.player.experience >= newState.player.experienceToNext) {
          const oldLevel = newState.player.level;
          newState.player.level += 1;
          newState.player.experienceToNext = Math.floor(newState.player.experienceToNext * 1.15);
          
          // Stat increases on level up
          const statIncrease = 100 + (newState.player.level * 10);
          Object.keys(newState.player.baseStats).forEach(stat => {
            newState.player.baseStats[stat] += statIncrease;
          });

          addAdvancedNotification({
            message: `🎉 LEVEL UP! ${oldLevel} → ${newState.player.level}`,
            type: 'success',
            tier: 'legendary',
            duration: 8000
          });

          setScreenShake(8);
          setTimeout(() => setScreenShake(0), 1000);
        }

        return newState;
      } else if (newPlayerHp <= 0) {
        // Player defeated
        addAdvancedNotification({
          message: '💀 You have been defeated!',
          type: 'error',
          tier: 'legendary',
          duration: 5000
        });

        // Respawn player after delay
        setTimeout(() => {
          setGameState(prevState => ({
            ...prevState,
            player: {
              ...prevState.player,
              derivedStats: {
                ...prevState.player.derivedStats,
                hp: { ...prevState.player.derivedStats.hp, current: prevState.player.derivedStats.hp.max },
                mp: { ...prevState.player.derivedStats.mp, current: prevState.player.derivedStats.mp.max },
                sp: { ...prevState.player.derivedStats.sp, current: prevState.player.derivedStats.sp.max }
              },
              position: { ...prevState.player.position.lastSafePosition }
            }
          }));
        }, 5000);
      }

      const newState = { ...prev };
      newState.player.derivedStats.hp.current = newPlayerHp;
      return newState;
    });
  }, [calculateDamage, addAdvancedNotification, generateUniqueId]);

  // Window management system
  const toggleWindow = useCallback((windowName, customConfig = {}) => {
    setGameState(prev => {
      const newActiveWindows = new Set(prev.ui.activeWindows);
      
      if (newActiveWindows.has(windowName)) {
        newActiveWindows.delete(windowName);
      } else {
        newActiveWindows.add(windowName);
        
        // Set default position if not exists
        const newConfigs = new Map(prev.ui.windowConfigurations);
        if (!newConfigs.has(windowName)) {
          const defaultPositions = {
            inventory: { x: 100, y: 100, width: 800, height: 600 },
            character: { x: 200, y: 150, width: 600, height: 700 },
            skills: { x: 300, y: 100, width: 700, height: 500 },
            guild: { x: 150, y: 200, width: 900, height: 600 },
            quests: { x: 400, y: 50, width: 500, height: 700 },
            map: { x: 50, y: 50, width: 1000, height: 700 },
            settings: { x: 350, y: 250, width: 600, height: 500 },
            social: { x: 250, y: 300, width: 400, height: 500 },
            achievements: { x: 500, y: 100, width: 700, height: 600 }
          };
          
          newConfigs.set(windowName, {
            ...defaultPositions[windowName],
            ...customConfig
          });
        }
        
        return {
          ...prev,
          ui: {
            ...prev.ui,
            activeWindows: newActiveWindows,
            windowConfigurations: newConfigs
          }
        };
      }
      
      return {
        ...prev,
        ui: {
          ...prev.ui,
          activeWindows: newActiveWindows
        }
      };
    });
  }, []);

  // Enhanced keyboard controls
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      
      // Prevent default for game controls
      if (['w', 's', 'a', 'd', 'q', 'e', ' ', 'shift', 'tab'].includes(key) || 
          event.key.startsWith('Arrow') || 
          (event.key >= '1' && event.key <= '9')) {
        event.preventDefault();
      }
      
      switch(key) {
        // Movement - WASD + diagonal
        case 'w': case 'arrowup': 
          movePlayer('north', 25, event.shiftKey); 
          break;
        case 's': case 'arrowdown': 
          movePlayer('south', 25, event.shiftKey); 
          break;
        case 'a': case 'arrowleft': 
          movePlayer('west', 25, event.shiftKey); 
          break;
        case 'd': case 'arrowright': 
          movePlayer('east', 25, event.shiftKey); 
          break;
        
        // Flight/Z-axis movement
        case 'q': 
          if (event.shiftKey) movePlayer('up_z', 25); 
          break;
        case 'e': 
          if (event.shiftKey) movePlayer('down_z', 25); 
          break;
          
        // Skills (1-9)
        case '1': case '2': case '3': case '4': case '5':
        case '6': case '7': case '8': case '9':
          useAdvancedSkill(parseInt(key));
          break;
          
        // Windows
        case 'i': toggleWindow('inventory'); break;
        case 'c': toggleWindow('character'); break;
        case 'k': toggleWindow('skills'); break;
        case 'g': toggleWindow('guild'); break;
        case 'j': toggleWindow('quests'); break;
        case 'm': toggleWindow('map'); break;
        case 'o': toggleWindow('settings'); break;
        case 'f': toggleWindow('social'); break;
        case 'h': toggleWindow('achievements'); break;
        
        // Combat actions
        case ' ': // Auto-attack
          const currentRealm = gameState.world.universes.prime_reality.dimensions.material_plane.realms[gameState.player.currentRegion];
          if (currentRealm && currentRealm.monsters) {
            const nearbyMonsters = Object.values(currentRealm.monsters).flat().filter(monster => {
              const distance = Math.sqrt(
                Math.pow(monster.position?.x - gameState.player.position.x, 2) + 
                Math.pow(monster.position?.y - gameState.player.position.y, 2)
              );
              return distance < 200;
            });
            
            if (nearbyMonsters.length > 0) {
              engageAdvancedCombat(nearbyMonsters[0].id, nearbyMonsters[0]);
            }
          }
          break;
        
        case 'tab':
          event.preventDefault();
          // Cycle through targets
          break;
        
        case 'escape':
          // Close all windows
          setGameState(prev => ({
            ...prev,
            ui: { ...prev.ui, activeWindows: new Set() }
          }));
          break;
        
        default: 
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [movePlayer, useAdvancedSkill, toggleWindow, engageAdvancedCombat, gameState]);

  // Game loop with advanced systems
  useEffect(() => {
    const gameLoop = setInterval(() => {
      setGameState(prev => {
        const newState = { ...prev };
        const deltaTime = 100; // 100ms
        
        // Resource regeneration
        const player = newState.player;
        
        // Health regeneration
        if (player.derivedStats.hp.current < player.derivedStats.hp.max) {
          player.derivedStats.hp.current = Math.min(
            player.derivedStats.hp.max,
            player.derivedStats.hp.current + (player.derivedStats.hp.regen * (deltaTime / 1000))
          );
        }
        
        // Mana regeneration
        if (player.derivedStats.mp.current < player.derivedStats.mp.max) {
          player.derivedStats.mp.current = Math.min(
            player.derivedStats.mp.max,
            player.derivedStats.mp.current + (player.derivedStats.mp.regen * (deltaTime / 1000))
          );
        }
        
        // Stamina regeneration
        if (player.derivedStats.sp.current < player.derivedStats.sp.max) {
          player.derivedStats.sp.current = Math.min(
            player.derivedStats.sp.max,
            player.derivedStats.sp.current + (player.derivedStats.sp.regen * (deltaTime / 1000))
          );
        }
        
        // Energy regeneration
        if (player.derivedStats.energy.current < player.derivedStats.energy.max) {
          player.derivedStats.energy.current = Math.min(
            player.derivedStats.energy.max,
            player.derivedStats.energy.current + (player.derivedStats.energy.regen * (deltaTime / 1000))
          );
        }
        
        // Update skill cooldowns
        const newCooldowns = new Map();
        for (const [skillId, cooldown] of player.skills.cooldowns) {
          const newCooldown = cooldown - deltaTime;
          if (newCooldown > 0) {
            newCooldowns.set(skillId, newCooldown);
          }
        }
        player.skills.cooldowns = newCooldowns;
        
        // Update world time
        const timeSystem = newState.world.timeSystem;
        timeSystem.currentTime += (deltaTime / timeSystem.dayDuration) * 24;
        
        if (timeSystem.currentTime >= 24) {
          timeSystem.currentTime = 0;
          timeSystem.calendar.currentDay += 1;
        }
        
        // Update time phase
        const time = timeSystem.currentTime;
        const phases = timeSystem.phases.definitions;
        let currentPhase = 'unknown';
        
        for (const [phase, definition] of Object.entries(phases)) {
          if (time >= definition.start && time < definition.end) {
            currentPhase = phase;
            break;
          }
        }
        
        timeSystem.phases.current = currentPhase;
        
        // Weather system updates
        const weather = newState.world.weatherSystem.current;
        weather.duration -= deltaTime;
        
        if (weather.duration <= 0) {
          // Change weather
          const weatherTypes = [
            'sunny', 'cloudy', 'rain', 'storm', 'aurora_storm',
            'cosmic_clear', 'void_mist', 'dragon_winds'
          ];
          weather.type = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
          weather.duration = Math.random() * 3600000 + 1800000; // 30min to 90min
        }
        
        return newState;
      });
    }, 100);
    
    return () => clearInterval(gameLoop);
  }, []);

  // ======================== UI COMPONENTS ========================
  
  const PlayerStatusPanel = () => (
    <div className="fixed top-4 left-4 bg-gradient-to-br from-black/95 via-purple-900/90 to-blue-900/90 backdrop-blur-xl rounded-2xl border-2 border-cyan-500/70 p-6 min-w-[400px] shadow-2xl">
      {/* Player Info Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-xl flex items-center justify-center text-4xl border-2 border-white/30 shadow-xl">
            <Crown className="w-12 h-12 text-white drop-shadow-lg" />
          </div>
          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm px-3 py-1 rounded-full font-bold shadow-lg">
            {gameState.player.level}
          </div>
          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs px-2 py-1 rounded-full font-bold">
            P{gameState.player.prestigeLevel}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            {gameState.player.name}
          </h3>
          <p className="text-sm text-cyan-300 mb-1 font-semibold">{gameState.player.title}</p>
          <p className="text-xs text-purple-300">{gameState.player.class}</p>
          <p className="text-xs text-blue-300">Race: {gameState.player.race}</p>
          <p className="text-xs text-gray-400">Guild: {gameState.player.guild.name}</p>
        </div>
      </div>

      {/* Enhanced Resource Bars */}
      {/* Health Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-red-400 font-semibold flex items-center gap-2">
            <Heart className="w-4 h-4" />
            Health
          </span>
          <span className="text-white font-mono">
            {Math.floor(gameState.player.derivedStats.hp.current).toLocaleString()} / {gameState.player.derivedStats.hp.max.toLocaleString()}
          </span>
        </div>
        <div className="relative w-full bg-gray-800/80 rounded-full h-5 overflow-hidden border border-red-500/30">
          <div 
            className="h-full bg-gradient-to-r from-red-600 via-red-500 to-red-400 transition-all duration-300 shadow-inner relative"
            style={{ width: `${(gameState.player.derivedStats.hp.current / gameState
