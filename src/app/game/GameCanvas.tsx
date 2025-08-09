<div class="legendary-menu-btn" onclick="openLegendaryPetSystem()" title="Hệ thống thú cưng huyền thoại (P)">🐲</div>
                <div class="legendary-menu-btn" onclick="openLegendaryRaid()" title="Raid huyền thoại (R)">⚔️</div>
            </div>
        </div>

        <!-- Legendary Modal Windows -->
        
        <!-- Ultimate Inventory Modal -->
        <div class="legendary-modal" id="legendaryInventoryModal">
            <div class="legendary-modal-content" style="width: 1200px;">
                <div class="legendary-modal-header">
                    <div class="legendary-modal-title">🎒 Kho Báu Huyền Thoại & Trang Bị Thần Thánh</div>
                    <button class="legendary-close-btn" onclick="closeLegendaryModal('legendaryInventoryModal')">&times;</button>
                </div>
                <div style="display: grid; grid-template-columns: 400px 1fr; gap: 40px;">
                    <!-- Legendary Equipment Display -->
                    <div>
                        <h3 style="margin-bottom: 20px; color: #f39c12; text-align: center;">✨ Trang Bị Thần Thánh Hiện Tại</h3>
                        <div style="display: grid; grid-template-columns: repeat(3, 80px); gap: 15px; justify-content: center; margin-bottom: 25px;">
                            <div></div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #8b4513, #cd853f);" title="Divine Dragon Crown +25" onclick="showLegendaryEquipmentInfo('helm')">👑</div>
                            <div></div>
                            
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #e74c3c, #c0392b);" title="Phoenix Destroyer Blade +30" onclick="showLegendaryEquipmentInfo('weapon')">🗡️</div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #3498db, #2980b9);" title="Armor of the Void Emperor +28" onclick="showLegendaryEquipmentInfo('armor')">🛡️</div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #f39c12, #e67e22);" title="Shield of Eternal Light +22" onclick="showLegendaryEquipmentInfo('shield')">🔰</div>
                            
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #9b59b6, #8e44ad);" title="Ring of Ultimate Power +20" onclick="showLegendaryEquipmentInfo('ring')">💍</div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #27ae60, #229954);" title="Boots of the Wind God +18" onclick="showLegendaryEquipmentInfo('boots')">👟</div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #74b9ff, #0984e3);" title="Amulet of Infinite Wisdom +24" onclick="showLegendaryEquipmentInfo('necklace')">📿</div>
                        </div>
                        
                        <div style="background: linear-gradient(135deg, rgba(139,69,19,0.3), rgba(205,133,63,0.2)); padding: 20px; border-radius: 16px; border: 3px solid #8b4513;">
                            <h4 style="color: #8b4513; margin-bottom: 15px; text-align: center;">📈 Tổng Chỉ Số Thần Thánh</h4>
                            <div style="font-size: 14px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                                <p><strong>⚔️ Tấn công:</strong> <span style="color: #e74c3c;">+12,850</span></p>
                                <p><strong>🛡️ Phòng thủ:</strong> <span style="color: #3498db;">+6,980</span></p>
                                <p><strong>💗 Máu:</strong> <span style="color: #27ae60;">+25,000</span></p>
                                <p><strong>💙 Mana:</strong> <span style="color: #74b9ff;">+15,200</span></p>
                                <p><strong>⚡ Chí mạng:</strong> <span style="color: #f39c12;">+58%</span></p>
                                <p><strong>💨 Tốc độ:</strong> <span style="color: #9b59b6;">+75%</span></p>
                                <p><strong>🔥 Sát thương kỹ năng:</strong> <span style="color: #e67e22;">+420%</span></p>
                                <p><strong>✨ Kháng phép:</strong> <span style="color: #95a5a6;">+85%</span></p>
                            </div>
                            
                            <div style="margin-top: 20px; text-align: center;">
                                <div style="color: #8b4513; font-weight: bold; font-size: 16px; margin-bottom: 10px;">🌟 Bộ Trang Bị Hoàn Chỉnh 🌟</div>
                                <div style="color: #cd853f; font-size: 14px;">
                                    <p>🎯 Set Bonus: "Dragon Emperor's Legacy"</p>
                                    <p>💀 +50% sát thương với Boss</p>
                                    <p>🛡️ +30% giảm sát thương nhận</p>
                                    <p>⚡ Kỹ năng không cooldown trong 10s</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Legendary Inventory Grid -->
                    <div>
                        <h3 style="margin-bottom: 20px; color: #f39c12; text-align: center;">📦 Kho Báu Vô Tận (48/100)</h3>
                        <div style="display: grid; grid-template-columns: repeat(10, 70px); gap: 10px; max-height: 500px; overflow-y: auto; padding: 20px; background: rgba(0,0,0,0.3); border-radius: 16px;">
                            <!-- Legendary Items Row 1 -->
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #8b4513, #cd853f);" onclick="useLegendaryItem('artifact-sword')" title="Artifact Dragon Slayer Sword">⚔️</div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #e91e63, #ad1457);" onclick="useLegendaryItem('mythic-bow')" title="Mythic Phoenix Bow">🏹</div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #fff, #f1c40f);" onclick="useLegendaryItem('divine-staff')" title="Divine World Destroyer Staff">🔮</div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #27ae60, #2ecc71);" onclick="useLegendaryItem('legendary-potion')" title="Legendary Health Elixir">🧪</div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #74b9ff, #0984e3);" onclick="useLegendaryItem('divine-mana')" title="Divine Mana Crystal">💙</div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #8b4513, #cd853f);" onclick="useLegendaryItem('dragon-gem')" title="Ancient Dragon Soul Gem">💎</div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #e67e22, #d35400);" onclick="useLegendaryItem('phoenix-scroll')" title="Phoenix Resurrection Scroll">📜</div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #f39c12, #e67e22);" onclick="useLegendaryItem('master-key')" title="Master Key of All Realms">🗝️</div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #9b59b6, #8e44ad);" onclick="useLegendaryItem('void-orb')" title="Void Emperor's Orb">🔮</div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #e74c3c, #c0392b);" onclick="useLegendaryItem('demon-heart')" title="Demon Lord's Heart">❤️</div>
                            
                            <!-- Legendary Items Row 2 -->
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #27ae60, #229954);" onclick="useLegendaryItem('nature-armor')" title="Armor of Nature's Wrath">🌿</div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #74b9ff, #0984e3);" onclick="useLegendaryItem('ice-helm')" title="Helm of Eternal Winter">🧊</div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #e74c3c, #c0392b);" onclick="useLegendaryItem('fire-boots')" title="Boots of Infernal Speed">👢</div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #f39c12, #e67e22);" onclick="useLegendaryItem('golden-ring')" title="Ring of Midas Touch">💍</div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #27ae60, #2ecc71);" onclick="useLegendaryItem('healing-fruit')" title="Fruit of Immortality">🍎</div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #9b59b6, #8e44ad);" onclick="useLegendaryItem('void-crystal')" title="Void Reality Crystal">💜</div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #8b4513, #cd853f);" onclick="useLegendaryItem('ancient-book')" title="Ancient Spellbook of Power">📚</div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #74b9ff, #0984e3);" onclick="useLegendaryItem('mana-crystal')" title="Infinite Mana Crystal">🔹</div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #e91e63, #ad1457);" onclick="useLegendaryItem('love-potion')" title="Elixir of Eternal Love">💖</div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #f1c40f, #f39c12);" onclick="useLegendaryItem('gold-bar')" title="Pure Gold Ingot x100">🥇</div>
                            
                            <!-- Continue with more legendary items... -->
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #95a5a6, #7f8c8d);" onclick="useLegendaryItem('teleport-stone')" title="Dimensional Teleport Stone">🌀</div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #e74c3c, #c0392b);" onclick="useLegendaryItem('rage-potion')" title="Berserker Rage Elixir">😡</div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #fff, #ecf0f1);" onclick="useLegendaryItem('angel-wing')" title="Archangel's Wing">🕊️</div>
                            <div class="legendary-skill-slot" style="background: linear-gradient(45deg, #2c3e50, #34495e);" onclick="useLegendaryItem('shadow-cloak')" title="Cloak of Eternal Shadows">🧥</div>
                            
                            <!-- Empty slots for expansion -->
                            <div class="legendary-skill-slot" style="background: rgba(0,0,0,0.4); border: 3px dashed #666;"></div>
                            <div class="legendary-skill-slot" style="background: rgba(0,0,0,0.4); border: 3px dashed #666;"></div>
                            <div class="legendary-skill-slot" style="background: rgba(0,0,0,0.4); border: 3px dashed #666;"></div>
                            <div class="legendary-skill-slot" style="background: rgba(0,0,0,0.4); border: 3px dashed #666;"></div>
                            <div class="legendary-skill-slot" style="background: rgba(0,0,0,0.4); border: 3px dashed #666;"></div>
                            <div class="legendary-skill-slot" style="background: rgba(0,0,0,0.4); border: 3px dashed #666;"></div>
                        </div>
                        
                        <div style="display: flex; gap: 15px; margin-top: 20px; justify-content: center;">
                            <button class="legendary-game-btn success">🔀 Sắp Xếp Tự Động</button>
                            <button class="legendary-game-btn warning">📦 Mở Rộng Kho</button>
                            <button class="legendary-game-btn mythic">✨ Nâng Cấp Trang Bị</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Ultimate Game State Management
        let legendaryGameState = {
            player: {
                x: 1200,
                y: 900,
                hp: 100,
                mp: 85,
                exp: 75,
                level: 50,
                class: 'legendary-warrior',
                gold: 2847650,
                diamonds: 58920,
                crystals: 12580,
                currentRegion: 'mystical_forest',
                isOnMount: false,
                activePet: 'void-dragon',
                activeMount: 'storm-dragon',
                rageMode: false,
                skillCooldowns: new Map()
            },
            camera: {
                x: 0,
                y: 0
            },
            activeSkill: 1,
            monsters: new Map(),
            legendaryEquipment: {
                weapon: { name: 'Phoenix Destroyer Blade +30', attack: 8500, rarity: 'divine' },
                armor: { name: 'Armor of the Void Emperor +28', defense: 4800, rarity: 'mythic' },
                helm: { name: 'Divine Dragon Crown +25', hp: 12000, rarity: 'artifact' },
                shield: { name: 'Shield of Eternal Light +22', defense: 2180, rarity: 'legendary' },
                boots: { name: 'Boots of the Wind God +18', speed: 3850, rarity: 'mythic' },
                ring: { name: 'Ring of Ultimate Power +20', attack: 4350, rarity: 'divine' },
                necklace: { name: 'Amulet of Infinite Wisdom +24', mp: 15200, rarity: 'artifact' }
            }
        };

        // Enhanced Region System
        const legendaryRegions = {
            mystical_forest: {
                name: '🌳 Rừng Cổ Thụ Mystwood',
                level: '1-15',
                stars: '⭐⭐⭐',
                monsters: ['ancient-treant', 'shadow-wolf'],
                drops: ['artifact', 'mythic']
            },
            scorching_desert: {
                name: '🏜️ Sa Mạc Thiêu Đốt Blazeheart',
                level: '10-25',
                stars: '⭐⭐⭐⭐',
                monsters: ['sand-colossus', 'venom-serpent'],
                drops: ['mythic', 'divine']
            },
            frozen_wasteland: {
                name: '❄️ Vùng Băng Giá Frostmourne',
                level: '20-35',
                stars: '⭐⭐⭐⭐⭐',
                monsters: ['frost-titan', 'ice-dragon'],
                drops: ['divine', 'celestial']
            },
            infernal_volcano: {
                name: '🌋 Núi Lửa Địa Ngục Infernalis',
                level: '30-50',
                stars: '⭐⭐⭐⭐⭐⭐',
                monsters: ['demon-lord', 'inferno-phoenix'],
                drops: ['divine', 'celestial']
            },
            shadow_realm: {
                name: '👁️ Vương Quốc Bóng Tối Shadowlands',
                level: '40-60',
                stars: '⭐⭐⭐⭐⭐⭐⭐',
                monsters: ['shadow-emperor'],
                drops: ['celestial', 'omnipotent']
            }
        };

        // Initialize Legendary Game
        function initLegendaryGame() {
            updateLegendaryCamera();
            initializeLegendaryMonsters();
            startLegendaryGameLoop();
            setupLegendaryRegionDetection();
            setupLegendaryKeyboardControls();
        }

        // Legendary Monster Initialization
        function initializeLegendaryMonsters() {
            document.querySelectorAll('.monster').forEach(monster => {
                const level = parseInt(monster.dataset.level);
                const hp = parseInt(monster.dataset.hp);
                const id = monster.id || `legendary_monster_${Math.random().toString(36).substr(2, 9)}`;
                monster.id = id;
                
                legendaryGameState.monsters.set(id, {
                    level: level,
                    maxHp: hp,
                    currentHp: hp,
                    element: monster,
                    type: monster.classList[1],
                    lastAttackTime: 0,
                    rarity: level >= 50 ? 'mythic' : level >= 35 ? 'legendary' : level >= 20 ? 'epic' : 'rare'
                });
            });
        }

        // Ultra-Enhanced Camera System
        function updateLegendaryCamera() {
            const worldGrid = document.getElementById('worldGrid');
            const gameWorld = document.getElementById('gameWorld');
            const worldRect = gameWorld.getBoundingClientRect();
            
            const centerX = worldRect.width / 2;
            const centerY = worldRect.height / 2;
            
            legendaryGameState.camera.x = legendaryGameState.player.x - centerX;
            legendaryGameState.camera.y = legendaryGameState.player.y - centerY;
            
            // Enhanced clamping for massive world
            legendaryGameState.camera.x = Math.max(0, Math.min(legendaryGameState.camera.x, 9600 - worldRect.width));
            legendaryGameState.camera.y = Math.max(0, Math.min(legendaryGameState.camera.y, 7200 - worldRect.height));
            
            worldGrid.style.transform = `translate(-${legendaryGameState.camera.x}px, -${legendaryGameState.camera.y}px)`;
            
            updateLegendaryMinimap();
        }

        // Epic Movement System
        function moveLegendaryPlayer(direction) {
            const player = document.getElementById('legendaryMainPlayer');
            const pet = document.getElementById('legendaryPlayerPet');
            const mount = document.getElementById('legendaryPlayerMount');
            const speed = legendaryGameState.player.isOnMount ? 64 : 48; // Ultra fast movement
            
            let newX = legendaryGameState.player.x;
            let newY = legendaryGameState.player.y;
            
            switch(direction) {
                case 'up':
                    newY = Math.max(32, newY - speed);
                    break;
                case 'down':
                    newY = Math.min(7168, newY + speed);
                    break;
                case 'left':
                    newX = Math.max(32, newX - speed);
                    break;
                case 'right':
                    newX = Math.min(9568, newX + speed);
                    break;
            }
            
            if (canLegendaryMoveTo(newX, newY)) {
                legendaryGameState.player.x = newX;
                legendaryGameState.player.y = newY;
                
                player.style.left = newX + 'px';
                player.style.top = newY + 'px';
                
                // Smooth pet and mount following
                setTimeout(() => {
                    pet.style.left = (newX - 25) + 'px';
                    pet.style.top = (newY - 20) + 'px';
                    
                    if (legendaryGameState.player.isOnMount) {
                        mount.style.left = (newX - 24) + 'px';
                        mount.style.top = (newY - 22) + 'px';
                    }
                }, 100);
                
                updateLegendaryCamera();
                detectLegendaryCurrentRegion(newX, newY);
                
                // Add movement particle effects
                createMovementParticles(newX, newY);
            }
        }

        // Enhanced Collision Detection
        function canLegendaryMoveTo(x, y) {
            const tileX = Math.floor(x / 32);
            const tileY = Math.floor(y / 32);
            
            if (tileX < 0 || tileX >= 300 || tileY < 0 || tileY >= 225) {
                return false;
            }
            
            // Legendary characters can fly over water
            return true;
        }

        // Epic Region Detection
        function detectLegendaryCurrentRegion(x, y) {
            const tileX = Math.floor(x / 32);
            const tileY = Math.floor(y / 32);
            let newRegion = 'mystical_forest';
            
            if (tileX >= 120 && tileX < 240 && tileY >= 0 && tileY < 90) {
                newRegion = 'scorching_desert';
            } else if (tileX >= 0 && tileX < 120 && tileY >= 90 && tileY < 180) {
                newRegion = 'frozen_wasteland';
            } else if (tileX >= 120 && tileX < 240 && tileY >= 90 && tileY < 180) {
                newRegion = 'infernal_volcano';
            } else if (tileY >= 180 && tileY < 225) {
                newRegion = 'shadow_realm';
            }
            
            if (newRegion !== legendaryGameState.player.currentRegion) {
                legendaryGameState.player.currentRegion = newRegion;
                updateLegendaryRegionIndicator(newRegion);
            }
        }

        function updateLegendaryRegionIndicator(region) {
            const indicator = document.getElementById('legendaryRegionIndicator');
            const regionData = legendaryRegions[region];
            
            indicator.className = `legendary-region-indicator region-${region.replace('_', '-')}`;
            indicator.textContent = `${regionData.name} - Khu vực Lv.${regionData.level} ${regionData.stars}`;
        }

        // Ultimate Combat System
        function attackLegendaryMonster(monsterElement) {
            const monsterId = monsterElement.id;
            const monster = legendaryGameState.monsters.get(monsterId);
            
            if (!monster) return;
            
            const now = Date.now();
            if (now - monster.lastAttackTime < 800) return; // Faster attack speed
            monster.lastAttackTime = now;
            
            // Calculate legendary damage
            const baseDamage = 1500 + Math.floor(Math.random() * 2000);
            const weaponBonus = legendaryGameState.legendaryEquipment.weapon.attack || 0;
            const levelBonus = legendaryGameState.player.level * 50;
            const totalDamage = baseDamage + Math.floor(weaponBonus * 0.5) + levelBonus;
            
            const isCritical = Math.random() < 0.68; // High crit rate
            const isLegendaryHit = Math.random() < 0.15; // Legendary hit chance
            
            let finalDamage = totalDamage;
            let damageType = 'damage';
            
            if (isLegendaryHit) {
                finalDamage = Math.floor(totalDamage * 3.5);
                damageType = 'legendary-hit';
            } else if (isCritical) {
                finalDamage = Math.floor(totalDamage * 2.2);
                damageType = 'critical';
            }
            
            // Rage mode bonus
            if (legendaryGameState.player.rageMode) {
                finalDamage = Math.floor(finalDamage * 1.8);
            }
            
            monster.currentHp = Math.max(0, monster.currentHp - finalDamage);
            
            // Update HP bar with smooth animation
            const hpFill = monsterElement.querySelector('.advanced-hp-fill');
            const hpPercent = (monster.currentHp / monster.maxHp) * 100;
            hpFill.style.width = hpPercent + '%';
            
            if (hpPercent < 25) {
                hpFill.classList.add('critical');
            } else if (hpPercent < 50) {
                hpFill.classList.add('medium');
            }
            
            showLegendaryDamageNumber(monsterElement, finalDamage, damageType);
            
            if (monster.currentHp <= 0) {
                defeatLegendaryMonster(monsterElement, monster);
            } else {
                setTimeout(() => legendaryMonsterCounterAttack(monster), 600);
            }
        }

        function defeatLegendaryMonster(monsterElement, monster) {
            const expGain = monster.level * 200 + Math.floor(Math.random() * 500);
            const goldGain = monster.level * 500 + Math.floor(Math.random() * 1000);
            const crystalGain = Math.floor(monster.level / 10) + Math.floor(Math.random() * 5);
            
            legendaryGameState.player.gold += goldGain;
            legendaryGameState.player.crystals += crystalGain;
            
            document.getElementById('epicGoldCount').textContent = legendaryGameState.player.gold.toLocaleString();
            document.getElementById('epicCrystalCount').textContent = legendaryGameState.player.crystals.toLocaleString();
            
            const rarityText = monster.rarity.toUpperCase();
            addLegendaryChatMessage('combat', `💀 [${rarityText}] Đánh bại ${monster.type}! +${expGain} EXP, +${goldGain} gold, +${crystalGain} crystals`);
            
            // Enhanced drop system
            if (Math.random() < 0.45) { // Higher drop chance
                dropLegendaryEquipment(monsterElement, monster);
            }
            
            // Defeat animation with particles
            createDefeatParticles(monsterElement);
            monsterElement.style.animation = 'legendaryMonsterDefeat 1.5s ease-out forwards';
            
            setTimeout(() => {
                if (monsterElement.parentNode) {
                    monsterElement.parentNode.removeChild(monsterElement);
                }
                legendaryGameState.monsters.delete(monsterElement.id);
                
                // Respawn legendary monsters
                setTimeout(() => respawnLegendaryMonster(monster), 45000);
            }, 1500);
        }

        function legendaryMonsterCounterAttack(monster) {
            const damage = Math.floor(monster.level * 25 + Math.random() * 100);
            const finalDamage = Math.max(1, damage - Math.floor(legendaryGameState.legendaryEquipment.armor.defense * 0.1));
            
            legendaryGameState.player.hp = Math.max(0, legendaryGameState.player.hp - (finalDamage / 100));
            
            const playerHpPercent = Math.max(0, legendaryGameState.player.hp);
            document.getElementById('legendaryPlayerHpBar').style.width = playerHpPercent + '%';
            
            const player = document.getElementById('legendaryMainPlayer');
            showLegendaryDamageNumber(player, finalDamage, 'damage');
            
            if (legendaryGameState.player.hp <= 0) {
                handleLegendaryPlayerDeath();
            }
        }

        // Epic Skill System
        function useLegendarySkill(skillId) {
            const skillSlots = document.querySelectorAll('.legendary-skill-slot');
            skillSlots.forEach(slot => slot.classList.remove('active'));
            skillSlots[skillId - 1].classList.add('active');
            
            legendaryGameState.activeSkill = skillId;
            
            // Check cooldown
            if (legendaryGameState.skillCooldowns.has(skillId)) {
                addLegendaryChatMessage('system', '⏰ Kỹ năng đang hồi chiêu!');
                return;
            }
            
            const legendarySkillEffects = {
                1: { name: 'Dragon Slash', damage: 2500, mana: 0, cooldown: 0 },
                2: { name: 'Divine Shield', damage: 0, mana: 50, effect: 'shield', cooldown: 15 },
                3: { name: 'Inferno Blast', damage: 4500, mana: 80, element: 'fire', aoe: true, cooldown: 20 },
                4: { name: 'Blizzard Storm', damage: 3800, mana: 75, element: 'ice', aoe: true, cooldown: 18 },
                5: { name: 'Thunder God', damage: 5500, mana: 100, element: 'lightning', cooldown: 25 },
                6: { name: 'Phoenix Revival', damage: 0, mana: 120, effect: 'resurrect', cooldown: 300 },
                7: { name: 'Shadow Step', damage: 0, mana: 40, effect: 'teleport', cooldown: 10 },
                8: { name: 'World Destroyer', damage: 15000, mana: 200, effect: 'ultimate', cooldown: 180 },
                9: { name: 'Divine Ascension', damage: 25000, mana: 500, effect: 'godmode', cooldown: 600 }
            };
            
            const skill = legendarySkillEffects[skillId];
            
            if (legendaryGameState.player.mp < skill.mana) {
                addLegendaryChatMessage('system', '💙 Không đủ mana để sử dụng kỹ năng huyền thoại!');
                return;
            }
            
            // Consume mana
            legendaryGameState.player.mp = Math.max(0, legendaryGameState.player.mp - skill.mana);
            document.getElementById('legendaryPlayerMpBar').style.width = legendaryGameState.player.mp + '%';
            
            // Add cooldown
            if (skill.cooldown > 0) {
                addLegendarySkillCooldown(skillId, skillSlots[skillId - 1], skill.cooldown);
            }
            
            // Create epic skill effect
            createLegendarySkillEffect(skillId, skill);
            
            const rarityText = skillId >= 8 ? 'ULTIMATE' : skillId >= 6 ? 'DIVINE' : 'LEGENDARY';
            addLegendaryChatMessage('combat', `⚡ [${rarityText}] Sử dụng: ${skill.name}!`);
        }

        function addLegendarySkillCooldown(skillId, skillSlot, cooldownTime) {
            legendaryGameState.skillCooldowns.set(skillId, true);
            skillSlot.style.position = 'relative';
            
            const cooldownOverlay = document.createElement('div');
            cooldownOverlay.className = 'legendary-skill-cooldown';
            cooldownOverlay.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(45deg, rgba(0,0,0,0.9), rgba(44,62,80,0.8));
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                font-weight: bold;
                color: #e74c3c;
                border: 3px solid #e74c3c;
                z-index: 10;
                animation: cooldownPulse 1s infinite ease-in-out;
            `;
            
            let remainingTime = cooldownTime;
            cooldownOverlay.textContent = remainingTime;
            skillSlot.appendChild(cooldownOverlay);
            
            const cooldownInterval = setInterval(() => {
                remainingTime--;
                cooldownOverlay.textContent = remainingTime;
                if (remainingTime <= 0) {
                    clearInterval(cooldownInterval);
                    legendaryGameState.skillCooldowns.delete(skillId);
                    if (cooldownOverlay.parentNode) {
                        skillSlot.removeChild(cooldownOverlay);
                    }
                    // Ready notification
                    addLegendaryChatMessage('system', `✨ Kỹ năng ${legendarySkillEffects[skillId].name} đã sẵn sàng!`);
                }
            }, 1000);
        }

        // Enhanced Chat System
        function addLegendaryChatMessage(type, message) {
            const chatWindow = document.getElementById('legendaryCharWindow');
            const messageDiv = document.createElement('div');
            messageDiv.className = `legendary-chat-message ${type}`;
            messageDiv.innerHTML = message;
            chatWindow.appendChild(messageDiv);
            chatWindow.scrollTop = chatWindow.scrollHeight;
            
            // Remove old messages to prevent memory issues
            if (chatWindow.children.length > 50) {
                chatWindow.removeChild(chatWindow.firstChild);
            }
        }

        function sendLegendaryMessage(event) {
            if (event.key === 'Enter') {
                const input = document.getElementById('legendaryCharInput');
                const message = input.value.trim();
                if (message) {
                    addLegendaryChatMessage('world', `[Thế giới] DragonEmperor: ${message}`);
                    input.value = '';
                    
                    // Simulate responses
                    setTimeout(() => {
                        const responses = [
                            '[Thế giới] ShadowEmperor: Impressive! 👑',
                            '[Thế giới] PhoenixSlayer: Let\'s team up for Shadow Emperor! 🔥',
                            '[Thế giới] IceDragonLord: Epic skills bro! ❄️',
                            '[Hệ thống] 🌟 Message sent successfully!'
                        ];
                        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                        addLegendaryChatMessage('world', randomResponse);
                    }, 1000 + Math.random() * 2000);
                }
            }
        }

        // Enhanced Effects and Particles
        function createMovementParticles(x, y) {
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const particle = document.createElement('div');
                    particle.style.cssText = `
                        position: absolute;
                        left: ${x + Math.random() * 20 - 10}px;
                        top: ${y + Math.random() * 20 - 10}px;
                        width: 4px;
                        height: 4px;
                        background: radial-gradient(circle, #f39c12, transparent);
                        border-radius: 50%;
                        pointer-events: none;
                        z-index: 350;
                        animation: particleFade 1s ease-out forwards;
                    `;
                    document.getElementById('worldGrid').appendChild(particle);
                    
                    setTimeout(() => {
                        if (particle.parentNode) {
                            particle.parentNode.removeChild(particle);
                        }
                    }, 1000);
                }, i * 100);
            }
        }

        function createDefeatParticles(element) {
            const rect = element.getBoundingClientRect();
            const worldGrid = document.getElementById('worldGrid');
            
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const particle = document.createElement('div');
                    particle.style.cssText = `
                        position: absolute;
                        left: ${parseInt(element.style.left) + Math.random() * 40 - 20}px;
                        top: ${parseInt(element.style.top) + Math.random() * 40 - 20}px;
                        width: 8px;
                        height: 8px;
                        background: radial-gradient(circle, #e74c3c, #f39c12);
                        border-radius: 50%;
                        pointer-events: none;
                        z-index: 350;
                        animation: explosionParticle 2s ease-out forwards;
                    `;
                    worldGrid.appendChild(particle);
                    
                    setTimeout(() => {
                        if (particle.parentNode) {
                            particle.parentNode.removeChild(particle);
                        }
                    }, 2000);
                }, i * 50);
            }
        }

        function showLegendaryDamageNumber(element, damage, type) {
            const damageText = document.createElement('div');
            damageText.className = `legendary-damage-text ${type}`;
            damageText.textContent = damage.toLocaleString();
            
            const x = parseInt(element.style.left) + 20;
            const y = parseInt(element.style.top) - 20;
            
            damageText.style.left = x + 'px';
            damageText.style.top = y + 'px';
            
            document.getElementById('worldGrid').appendChild(damageText);
            
            setTimeout(() => {
                if (damageText.parentNode) {
                    damageText.parentNode.removeChild(damageText);
                }
            }, 3000);
        }

        // Enhanced Utility Functions
        function useLegendaryPotion(type) {
            if (type === 'hp') {
                legendaryGameState.player.hp = Math.min(100, legendaryGameState.player.hp + 50);
                document.getElementById('legendaryPlayerHpBar').style.width = legendaryGameState.player.hp + '%';
                addLegendaryChatMessage('system', '🧪 Sử dụng Legendary Health Potion! +5000 HP');
            } else if (type === 'mp') {
                legendaryGameState.player.mp = Math.min(100, legendaryGameState.player.mp + 30);
                document.getElementById('legendaryPlayerMpBar').style.width = legendaryGameState.player.mp + '%';
                addLegendaryChatMessage('system', '💙 Sử dụng Divine Mana Elixir! +3000 MP');
            }
        }

        function toggleLegendaryMount() {
            const mount = document.getElementById('legendaryPlayerMount');
            legendaryGameState.player.isOnMount = !legendaryGameState.player.isOnMount;
            
            if (legendaryGameState.player.isOnMount) {
                mount.style.display = 'flex';
                mount.style.left = (legendaryGameState.player.x - 24) + 'px';
                mount.style.top = (legendaryGameState.player.y - 22) + 'px';
                addLegendaryChatMessage('system', '🐲 Triệu hồi Storm Dragon thành công! Tốc độ tăng +100%');
            } else {
                mount.style.display = 'none';
                addLegendaryChatMessage('system', '🐲 Thu hồi Storm Dragon. Tốc độ trở về bình thường.');
            }
        }

        function activateRageMode() {
            if (legendaryGameState.player.rageMode) {
                addLegendaryChatMessage('system', '😡 Rage Mode đang được kích hoạt!');
                return;
            }
            
            legendaryGameState.player.rageMode = true;
            const player = document.getElementById('legendaryMainPlayer');
            player.style.filter = 'brightness(1.5) saturate(2) hue-rotate(15deg)';
            player.style.animation = 'rageMode 0.5s infinite ease-in-out';
            
            addLegendaryChatMessage('combat', '😡 [RAGE MODE] Kích hoạt! Sát thương tăng +80% trong 30 giây!');
            
            setTimeout(() => {
                legendaryGameState.player.rageMode = false;
                player.style.filter = '';
                player.style.animation = '';
                addLegendaryChatMessage('system', '😡 Rage Mode kết thúc.');
            }, 30000);
        }

        // Modal Management
        function openLegendaryInventory() {
            document.getElementById('legendaryInventoryModal').style.display = 'flex';
        }

        function closeLegendaryModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }

        function openLegendaryCharacter() {
            addLegendaryChatMessage('system', '👑 Character window coming soon in next update!');
        }

        function openLegendaryGuild() {
            addLegendaryChatMessage('system', '🏰 Guild system coming soon in next update!');
        }

        function openLegendaryPetSystem() {
            addLegendaryChatMessage('system', '🐲 Pet system coming soon in next update!');
        }

        function openLegendaryRaid() {
            addLegendaryChatMessage('system', '⚔️ Raid system coming soon in next update!');
        }

        // Enhanced Keyboard Controls
        function setupLegendaryKeyboardControls() {
            document.addEventListener('keydown', (event) => {
                switch(event.key.toLowerCase()) {
                    case 'w': moveLegendaryPlayer('up'); break;
                    case 's': moveLegendaryPlayer('down'); break;
                    case 'a': moveLegendendaryPlayer('left'); break;
                    case 'd': moveLegendaryPlayer('right'); break;
                    case '1': case '2': case '3': case '4': case '5':
                    case '6': case '7': case '8': case '9':
                        useLegendarySkill(parseInt(event.key));
                        break;
                    case 'i': openLegendaryInventory(); break;
                    case 'c': openLegendaryCharacter(); break;
                    case 'g': openLegendaryGuild(); break;
                    case 'p': openLegendaryPetSystem(); break;
                    case 'r': openLegendaryRaid(); break;
                    case 'enter': document.getElementById('legendaryCharInput').focus(); break;
                }
            });
        }

        // Game Loop
        function startLegendaryGameLoop() {
            setInterval(() => {
                // Regenerate resources
                if (legendaryGameState.player.hp < 100) {
                    legendaryGameState.player.hp = Math.min(100, legendaryGameState.player.hp + 0.5);
                    document.getElementById('legendaryPlayerHpBar').style.width = legendaryGameState.player.hp + '%';
                }
                
                if (legendaryGameState.player.mp < 100) {
                    legendaryGameState.player.mp = Math.min(100, legendaryGameState.player.mp + 0.3);
                    document.getElementById('legendaryPlayerMpBar').style.width = legendaryGameState.player.mp + '%';
                }
                
                // Random events
                if (Math.random() < 0.001) { // 0.1% chance per frame
                    triggerRandomLegendaryEvent();
                }
            }, 100);
        }

        function triggerRandomLegendaryEvent() {
            const events = [
                '🌟 [Legendary Event] Meteor shower increases EXP gain by 200% for 5 minutes!',
                '💎 [Divine Blessing] All players receive 1000 free crystals!',
                '⚔️ [World Event] Shadow Emperor has been spotted in multiple realms!',
                '🎁 [Lucky Day] Drop rates increased by 50% for the next hour!',
                '🌈 [Rainbow Bridge] Fast travel unlocked between all regions!'
            ];
            
            const randomEvent = events[Math.floor(Math.random() * events.length)];
            addLegendaryChatMessage('legendary', randomEvent);
        }

        function updateLegendaryMinimap() {
            const playerDot = document.getElementById('epicMinimapPlayerDot');
            const mapWidth = 270;
            const mapHeight = 200;
            const worldWidth = 9600;
            const worldHeight = 7200;
            
            const mapX = (legendaryGameState.player.x / worldWidth) * mapWidth;
            const mapY = (legendaryGameState.player.y / worldHeight) * mapHeight;
            
            playerDot.style.left = Math.max(5, Math.min(mapWidth - 15, mapX)) + 'px';
            playerDot.style.top = Math.max(5, Math.min(mapHeight - 15, mapY)) + 'px';
        }

        function setupLegendaryRegionDetection() {
            // Initial region detection
            detectLegendaryCurrentRegion(legendaryGameState.player.x, legendaryGameState.player.y);
        }

        // Add CSS for additional animations
        const additionalStyles = `
            @keyframes particleFade {
                0% { opacity: 1; transform: scale(1); }
                100% { opacity: 0; transform: scale(0) translateY(-30px); }
            }
            
            @keyframes explosionParticle {
                0% { opacity: 1; transform: scale(1) rotate(0deg); }
                100% { opacity: 0; transform: scale(0.3) rotate(360deg) translateY(-80px); }
            }
            
            @keyframes cooldownPulse {
                0%, 100% { opacity: 0.8; }
                50% { opacity: 1; }
            }
            
            @keyframes rageMode {
                0%, 100% { filter: brightness(1.5) saturate(2) hue-rotate(15deg); }
                50% { filter: brightness(2) saturate(3) hue-rotate(30deg); }
            }
            
            @keyframes legendaryMonsterDefeat {
                0% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.5; transform: scale(1.2); }
                100% { opacity: 0; transform: scale(0) rotate(360deg); }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = additionalStyles;
        document.head.appendChild(styleSheet);

        // Initialize the legendary game
        initLegendaryGame();
        
        // Welcome message
        setTimeout(() => {
            addLegendaryChatMessage('legendary', '🎮 Welcome to DreamBooks MMO - Ultimate Edition!');
            addLegendaryChatMessage('system', '🌟 Use WASD to move, 1-9 for skills, I for inventory!');
            addLegendaryChatMessage('legendary', '👑 You are now a Level 50 Dragon Emperor! Rule the realms!');
        }, 1000);
    </script>
</body>
</html>            .legendary-menu-btn { width: 50px; height: 50px; font-size: 20px; }
            .epic-move-btn { width: 38px; height: 38px; font-size: 20px; }
            .legendary-bottom-ui { height: 130px; padding: 20px; }
            .epic-movement-pad { width: 100px; height: 100px; }
            .legendary-skill-bar { gap: 10px; padding: 15px 20px; }
        }
    </style>
</head>
<body>
    <div class="particle-bg"></div>
    
    <div class="game-container">
        <!-- Epic Region Indicator -->
        <div class="legendary-region-indicator region-mystical-forest" id="legendaryRegionIndicator">
            🌳 Rừng Cổ Thụ Mystwood - Khu vực Lv.1-15 ⭐⭐⭐
        </div>

        <!-- Enhanced Game World -->
        <div class="game-world" id="gameWorld">
            <div class="world-grid" id="worldGrid">
                <!-- Generate Ultra-Enhanced Terrain -->
                <script>
                    const worldGrid = document.getElementById('worldGrid');
                    const legendaryRegions = {
                        mystical_forest: { 
                            startX: 0, endX: 120, startY: 0, endY: 90, 
                            tiles: ['forest-grass', 'ancient-tree'],
                            name: '🌳 Rừng Cổ Thụ Mystwood',
                            level: '1-15',
                            stars: '⭐⭐⭐'
                        },
                        scorching_desert: { 
                            startX: 120, endX: 240, startY: 0, endY: 90, 
                            tiles: ['desert-sand', 'mystic-cactus'],
                            name: '🏜️ Sa Mạc Thiêu Đốt Blazeheart',
                            level: '10-25',
                            stars: '⭐⭐⭐⭐'
                        },
                        frozen_wasteland: { 
                            startX: 0, endX: 120, startY: 90, endY: 180, 
                            tiles: ['frozen-ground', 'ice-crystal'],
                            name: '❄️ Vùng Băng Giá Frostmourne',
                            level: '20-35',
                            stars: '⭐⭐⭐⭐⭐'
                        },
                        infernal_volcano: { 
                            startX: 120, endX: 240, startY: 90, endY: 180, 
                            tiles: ['molten-rock', 'lava-pool'],
                            name: '🌋 Núi Lửa Địa Ngục Infernalis',
                            level: '30-50',
                            stars: '⭐⭐⭐⭐⭐⭐'
                        },
                        enchanted_waters: { 
                            startX: 240, endX: 300, startY: 0, endY: 225, 
                            tiles: ['enchanted-water'],
                            name: '🌊 Vùng Biển Huyền Bí Aquamarine',
                            level: '15-40',
                            stars: '⭐⭐⭐⭐'
                        },
                        shadow_realm: { 
                            startX: 0, endX: 300, startY: 180, endY: 225, 
                            tiles: ['shadow-void'],
                            name: '👁️ Vương Quốc Bóng Tối Shadowlands',
                            level: '40-60',
                            stars: '⭐⭐⭐⭐⭐⭐⭐'
                        }
                    };
                    
                    for (let y = 0; y < 225; y++) {
                        for (let x = 0; x < 300; x++) {
                            const tile = document.createElement('div');
                            tile.className = 'tile';
                            
                            let currentRegion = 'mystical_forest';
                            for (const [regionName, region] of Object.entries(legendaryRegions)) {
                                if (x >= region.startX && x < region.endX && y >= region.startY && y < region.endY) {
                                    currentRegion = regionName;
                                    break;
                                }
                            }
                            
                            const regionData = legendaryRegions[currentRegion];
                            const tileType = regionData.tiles[Math.floor(Math.random() * regionData.tiles.length)];
                            tile.classList.add(tileType);
                            
                            tile.style.left = (x * 32) + 'px';
                            tile.style.top = (y * 32) + 'px';
                            tile.dataset.region = currentRegion;
                            worldGrid.appendChild(tile);
                        }
                    }
                </script>

                <!-- Legendary Main Player -->
                <div class="character player legendary-warrior" id="legendaryMainPlayer" style="left: 1200px; top: 900px;">
                    <div class="advanced-hp-bar">
                        <div class="advanced-hp-fill" style="width: 100%"></div>
                    </div>
                    <div class="legendary-name-tag player">🏆 DragonEmperor 🏆<br>🌟 Huyền Thoại Lv.50 🌟</div>
                </div>

                <!-- Legendary Pet and Mount -->
                <div class="legendary-pet pet-void-dragon" id="legendaryPlayerPet" style="left: 1175px; top: 880px;"></div>
                <div class="epic-mount mount-storm-dragon" id="legendaryPlayerMount" style="left: 1150px; top: 875px; display: none;"></div>

                <!-- Forest Region Legendary NPCs -->
                <div class="character nature-ranger" style="left: 800px; top: 700px;">
                    <div class="advanced-hp-bar">
                        <div class="advanced-hp-fill medium" style="width: 85%"></div>
                    </div>
                    <div class="legendary-name-tag npc">🌿 Ancient Forest Guardian 🌿<br>⭐ Keeper Lv.30 ⭐</div>
                </div>

                <!-- Mystical Forest Legendary Monsters -->
                <div class="monster ancient-treant" data-level="15" data-hp="2500" style="left: 1500px; top: 1100px;" onclick="attackLegendaryMonster(this)">
                    <div class="advanced-hp-bar" style="width: 54px;">
                        <div class="advanced-hp-fill" id="treant1-hp" style="width: 100%"></div>
                    </div>
                    <div class="legendary-name-tag monster">🌳 Ancient Treant Lord 🌳<br>⭐⭐⭐ Elite Lv.15 ⭐⭐⭐</div>
                </div>

                <div class="monster shadow-wolf" data-level="12" data-hp="1800" style="left: 1800px; top: 1300px;" onclick="attackLegendaryMonster(this)">
                    <div class="advanced-hp-bar">
                        <div class="advanced-hp-fill" id="shadowwolf1-hp" style="width: 100%"></div>
                    </div>
                    <div class="legendary-name-tag monster">🐺 Shadow Wolf Alpha 🐺<br>⭐⭐ Elite Lv.12 ⭐⭐</div>
                </div>

                <!-- Desert Region Legendary Monsters -->
                <div class="monster sand-colossus" data-level="25" data-hp="5000" style="left: 4500px; top: 1200px;" onclick="attackLegendaryMonster(this)">
                    <div class="advanced-hp-bar" style="width: 58px;">
                        <div class="advanced-hp-fill" id="colossus1-hp" style="width: 100%"></div>
                    </div>
                    <div class="legendary-name-tag monster">🗿 Sand Colossus Emperor 🗿<br>⭐⭐⭐⭐ Boss Lv.25 ⭐⭐⭐⭐</div>
                </div>

                <div class="monster venom-serpent" data-level="20" data-hp="3200" style="left: 4200px; top: 900px;" onclick="attackLegendaryMonster(this)">
                    <div class="advanced-hp-bar">
                        <div class="advanced-hp-fill" id="serpent1-hp" style="width: 100%"></div>
                    </div>
                    <div class="legendary-name-tag monster">🐍 Venom Serpent King 🐍<br>⭐⭐⭐ Elite Lv.20 ⭐⭐⭐</div>
                </div>

                <!-- Ice Region Legendary Monsters -->
                <div class="monster frost-titan" data-level="35" data-hp="8000" style="left: 1500px; top: 3200px;" onclick="attackLegendaryMonster(this)">
                    <div class="advanced-hp-bar" style="width: 60px;">
                        <div class="advanced-hp-fill" id="titan1-hp" style="width: 100%"></div>
                    </div>
                    <div class="legendary-name-tag monster">👹 Frost Titan Lord 👹<br>⭐⭐⭐⭐⭐ Boss Lv.35 ⭐⭐⭐⭐⭐</div>
                </div>

                <div class="monster ice-dragon" data-level="40" data-hp="12000" style="left: 1200px; top: 3600px;" onclick="attackLegendaryMonster(this)">
                    <div class="advanced-hp-bar" style="width: 64px;">
                        <div class="advanced-hp-fill" id="icedragon1-hp" style="width: 100%"></div>
                    </div>
                    <div class="legendary-name-tag monster">🐲 Glacier Dragon Empress 🐲<br>⭐⭐⭐⭐⭐⭐ Legendary Lv.40 ⭐⭐⭐⭐⭐⭐</div>
                </div>

                <!-- Infernal Volcano Legendary Monsters -->
                <div class="monster demon-lord" data-level="45" data-hp="15000" style="left: 4800px; top: 3400px;" onclick="attackLegendaryMonster(this)">
                    <div class="advanced-hp-bar" style="width: 62px;">
                        <div class="advanced-hp-fill" id="demonlord1-hp" style="width: 100%"></div>
                    </div>
                    <div class="legendary-name-tag monster">😈 Infernal Demon Lord 😈<br>⭐⭐⭐⭐⭐⭐ Legendary Lv.45 ⭐⭐⭐⭐⭐⭐</div>
                </div>

                <div class="monster inferno-phoenix" data-level="50" data-hp="18000" style="left: 4500px; top: 3800px;" onclick="attackLegendaryMonster(this)">
                    <div class="advanced-hp-bar" style="width: 66px;">
                        <div class="advanced-hp-fill" id="phoenix1-hp" style="width: 100%"></div>
                    </div>
                    <div class="legendary-name-tag monster">🔥 Inferno Phoenix God 🔥<br>⭐⭐⭐⭐⭐⭐⭐ Mythic Lv.50 ⭐⭐⭐⭐⭐⭐⭐</div>
                </div>

                <!-- Ultimate Shadow Realm Boss -->
                <div class="monster shadow-emperor" data-level="60" data-hp="50000" style="left: 4800px; top: 6000px;" onclick="attackLegendaryMonster(this)">
                    <div class="advanced-hp-bar" style="width: 70px;">
                        <div class="advanced-hp-fill" id="emperor1-hp" style="width: 100%"></div>
                    </div>
                    <div class="legendary-name-tag boss">👑 Shadow Emperor Overlord 👑<br>💀 WORLD BOSS Lv.60 💀<br>🌟🌟🌟 ULTIMATE RAID 🌟🌟🌟</div>
                </div>

                <!-- Legendary Equipment Drops -->
                <div class="legendary-drop drop-artifact" style="left: 1520px; top: 1130px; display: none;" onclick="collectLegendaryEquipment(this, 'artifact', 'treant-staff')">🌟</div>
                <div class="legendary-drop drop-mythic" style="left: 4520px; top: 1230px; display: none;" onclick="collectLegendaryEquipment(this, 'mythic', 'colossus-hammer')">⚡</div>
                <div class="legendary-drop drop-divine" style="left: 4520px; top: 3830px; display: none;" onclick="collectLegendaryEquipment(this, 'divine', 'phoenix-sword')">✨</div>

                <!-- More Legendary Pets and Mounts -->
                <div class="legendary-pet pet-phoenix" style="left: 785px; top: 685px;"></div>
                <div class="legendary-pet pet-celestial" style="left: 1485px; top: 1085px;"></div>
                <div class="epic-mount mount-phoenix" style="left: 4485px; top: 1185px;"></div>
                <div class="epic-mount mount-shadow-steed" style="left: 1185px; top: 3585px;"></div>
            </div>
        </div>

        <!-- Ultra-Enhanced Top UI -->
        <div class="legendary-top-ui">
            <div class="legendary-player-info">
                <div class="legendary-avatar"></div>
                <div class="legendary-stats">
                    <div class="legendary-level-text">Lv.50 DragonEmperor 👑 Huyền Thoại ⭐⭐⭐</div>
                    <div class="legendary-class-text">Chiến Binh Huyền Thoại - Slayer của 999 Rồng 🐲</div>
                    <div class="legendary-stat-bar">
                        <div class="legendary-hp-bar" id="legendaryPlayerHpBar" style="width: 100%"></div>
                    </div>
                    <div class="legendary-stat-bar">
                        <div class="legendary-mp-bar" id="legendaryPlayerMpBar" style="width: 85%"></div>
                    </div>
                    <div class="legendary-stat-bar">
                        <div class="legendary-exp-bar" id="legendaryPlayerExpBar" style="width: 75%"></div>
                    </div>
                </div>
            </div>
            
            <div class="epic-resources">
                <div class="epic-resource">
                    <div class="epic-resource-icon epic-gold"></div>
                    <span id="epicGoldCount">2,847,650</span>
                </div>
                <div class="epic-resource">
                    <div class="epic-resource-icon epic-diamond"></div>
                    <span id="epicDiamondCount">58,920</span>
                </div>
                <div class="epic-resource">
                    <div class="epic-resource-icon epic-crystal"></div>
                    <span id="epicCrystalCount">12,580</span>
                </div>
            </div>
        </div>

        <!-- Ultra-Enhanced Right Sidebar -->
        <div class="legendary-sidebar">
            <!-- Epic Minimap with All Regions -->
            <div class="epic-minimap">
                <div class="epic-minimap-content" id="epicMinimapContent">
                    <!-- Epic Region backgrounds -->
                    <div class="epic-minimap-region minimap-mystical-forest" style="left: 0; top: 0; width: 108px; height: 72px;"></div>
                    <div class="epic-minimap-region minimap-scorching-desert" style="left: 108px; top: 0; width: 108px; height: 72px;"></div>
                    <div class="epic-minimap-region minimap-frozen-wasteland" style="left: 0; top: 72px; width: 108px; height: 72px;"></div>
                    <div class="epic-minimap-region minimap-infernal-volcano" style="left: 108px; top: 72px; width: 108px; height: 72px;"></div>
                    <div class="epic-minimap-region minimap-shadow-realm" style="left: 0; top: 144px; width: 270px; height: 36px;"></div>
                    
                    <!-- Epic Player and entities -->
                    <div class="epic-minimap-dot epic-minimap-player" id="epicMinimapPlayerDot" style="left: 40px; top: 45px;"></div>
                    <div class="epic-minimap-dot epic-minimap-monster" style="left: 60px; top: 55px;"></div>
                    <div class="epic-minimap-dot epic-minimap-monster" style="left: 72px; top: 65px;"></div>
                    <div class="epic-minimap-dot epic-minimap-npc" style="left: 32px; top: 35px;"></div>
                    <div class="epic-minimap-dot epic-minimap-boss" style="left: 135px; top: 60px;"></div>
                    <div class="epic-minimap-dot epic-minimap-boss" style="left: 48px; top: 90px;"></div>
                    <div class="epic-minimap-dot epic-minimap-boss" style="left: 135px; top: 85px;"></div>
                    <div class="epic-minimap-dot epic-minimap-boss" style="left: 192px; top: 120px;"></div>
                </div>
            </div>

            <!-- Enhanced Player Stats Panel -->
            <div style="background: linear-gradient(135deg, rgba(0,0,0,0.9), rgba(44,62,80,0.8)); padding: 20px; border-radius: 16px; margin-bottom: 20px; border: 3px solid #555; box-shadow: 0 0 30px rgba(0,0,0,0.8);">
                <h4 style="color: #f39c12; margin-bottom: 15px; text-align: center;">📊 Thống Kê Chiến Đấu Huyền Thoại</h4>
                <div style="font-size: 13px; color: #bbb;">
                    <div style="display: flex; justify-content: space-between; margin: 6px 0; padding: 4px; background: rgba(231,76,60,0.1); border-radius: 6px;">
                        <span>⚔️ Tấn công:</span> <span style="color: #e74c3c; font-weight: bold;">15,450</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin: 6px 0; padding: 4px; background: rgba(52,152,219,0.1); border-radius: 6px;">
                        <span>🛡️ Phòng thủ:</span> <span style="color: #3498db; font-weight: bold;">8,280</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin: 6px 0; padding: 4px; background: rgba(39,174,96,0.1); border-radius: 6px;">
                        <span>💨 Tốc độ:</span> <span style="color: #27ae60; font-weight: bold;">4,650</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin: 6px 0; padding: 4px; background: rgba(243,156,18,0.1); border-radius: 6px;">
                        <span>⚡ Chí mạng:</span> <span style="color: #f39c12; font-weight: bold;">68%</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin: 6px 0; padding: 4px; background: rgba(155,89,182,0.1); border-radius: 6px;">
                        <span>🔥 Sát thương kỹ năng:</span> <span style="color: #9b59b6; font-weight: bold;">+450%</span>
                    </div>
                </div>
            </div>

            <!-- Enhanced Quick Actions -->
            <div style="background: linear-gradient(135deg, rgba(0,0,0,0.9), rgba(44,62,80,0.8)); padding: 20px; border-radius: 16px; margin-bottom: 20px; border: 3px solid #555; box-shadow: 0 0 30px rgba(0,0,0,0.8);">
                <h4 style="color: #f39c12; margin-bottom: 15px; text-align: center;">⚡ Hành Động Huyền Thoại</h4>
                <button class="legendary-game-btn success" onclick="useLegendaryPotion('hp')" style="width: 100%; margin: 5px 0;">🧪 Legendary HP Potion (+5000)</button>
                <button class="legendary-game-btn warning" onclick="useLegendaryPotion('mp')" style="width: 100%; margin: 5px 0;">💙 Divine MP Elixir (+3000)</button>
                <button class="legendary-game-btn mythic" onclick="toggleLegendaryMount()" style="width: 100%; margin: 5px 0;">🐲 Triệu Hồi Storm Dragon</button>
                <button class="legendary-game-btn danger" onclick="activateRageMode()" style="width: 100%; margin: 5px 0;">😡 Kích Hoạt Rage Mode</button>
            </div>

            <!-- Epic Online Players -->
            <div style="background: linear-gradient(135deg, rgba(0,0,0,0.9), rgba(44,62,80,0.8)); padding: 20px; border-radius: 16px; border: 3px solid #555; box-shadow: 0 0 30px rgba(0,0,0,0.8);">
                <h4 style="color: #f39c12; margin-bottom: 15px; text-align: center;">👥 Huyền Thoại Online (47)</h4>
                <div style="font-size: 12px; color: #bbb; max-height: 140px; overflow-y: auto;">
                    <div style="margin: 4px 0; color: #8b4513; padding: 6px; background: rgba(139,69,19,0.2); border-radius: 8px;">👑 ShadowEmperor (Lv.65) - World Champion</div>
                    <div style="margin: 4px 0; color: #e74c3c; padding: 6px; background: rgba(231,76,60,0.2); border-radius: 8px;">🔥 PhoenixSlayer (Lv.58) - Mythic Warrior</div>
                    <div style="margin: 4px 0; color: #74b9ff; padding: 6px; background: rgba(116,185,255,0.2); border-radius: 8px;">❄️ IceDragonLord (Lv.52) - Legendary Mage</div>
                    <div style="margin: 4px 0; color: #27ae60; padding: 6px; background: rgba(39,174,96,0.2); border-radius: 8px;">🏹 NatureGuardian (Lv.48) - Elite Ranger</div>
                    <div style="margin: 4px 0; color: #9b59b6; padding: 6px; background: rgba(155,89,182,0.2); border-radius: 8px;">🔮 VoidMaster (Lv.45) - Archmage</div>
                    <div style="text-align: center; margin-top: 12px; color: #666; font-style: italic;">
                        ... và 42 huyền thoại khác
                    </div>
                </div>
            </div>
        </div>

        <!-- Ultra-Enhanced Chat Window -->
        <div class="legendary-chat-window" id="legendaryCharWindow">
            <div class="legendary-chat-message system">🌟 [Hệ thống] Chào mừng đến DreamBooks MMO - Ultimate Edition! 🌟</div>
            <div class="legendary-chat-message world">[Thế giới] ShadowEmperor: Ai dám thách đấu với ta tại Shadow Realm? 👑💀</div>
            <div class="legendary-chat-message guild">[Bang hội] PhoenixSlayer: Chuẩn bị raid Shadow Emperor - cần 20 Mythic players! ⚔️🔥</div>
            <div class="legendary-chat-message combat">💥 [Chiến đấu] LEGENDARY HIT! Bạn gây 25,840 sát thương lên Ancient Treant!</div>
            <div class="legendary-chat-message legendary">🎉 [Huyền Thoại] DragonEmperor vừa nhận được Divine Phoenix Sword +25! 🗡️✨</div>
            <div class="legendary-chat-message world">[Thế giới] IceDragonLord: Bán Frost Titan Soul - 50M gold! 💎❄️</div>
            <div class="legendary-chat-message system">⚡ [Boss Alert] Shadow Emperor đã xuất hiện tại Shadow Realm! 👑💀</div>
        </div>

        <input type="text" class="legendary-chat-input" id="legendaryCharInput" placeholder="Nhập tin nhắn huyền thoại... (Enter để gửi)" onkeypress="sendLegendaryMessage(event)">

        <!-- Ultra-Enhanced Bottom UI -->
        <div class="legendary-bottom-ui">
            <!-- Epic Movement Controls -->
            <div class="epic-movement-pad">
                <div class="epic-move-btn epic-move-up" onclick="moveLegendaryPlayer('up')" title="Bay lên (W)">↑</div>
                <div class="epic-move-btn epic-move-down" onclick="moveLegendaryPlayer('down')" title="Lao xuống (S)">↓</div>
                <div class="epic-move-btn epic-move-left" onclick="moveLegendaryPlayer('left')" title="Trượt trái (A)">←</div>
                <div class="epic-move-btn epic-move-right" onclick="moveLegendaryPlayer('right')" title="Phóng phải (D)">→</div>
            </div>

            <!-- Legendary Skill Bar -->
            <div class="legendary-skill-bar">
                <div class="legendary-skill-slot active" onclick="useLegendarySkill(1)" title="Dragon Slash - Chém rồng huyền thoại">
                    🐲
                    <div class="legendary-skill-key">1</div>
                </div>
                <div class="legendary-skill-slot" onclick="useLegendarySkill(2)" title="Divine Shield - Khiên thiêng liêng">
                    🛡️
                    <div class="legendary-skill-key">2</div>
                </div>
                <div class="legendary-skill-slot" onclick="useLegendarySkill(3)" title="Inferno Blast - Nổ địa ngục">
                    🌋
                    <div class="legendary-skill-key">3</div>
                </div>
                <div class="legendary-skill-slot" onclick="useLegendarySkill(4)" title="Blizzard Storm - Bão tuyết">
                    🌨️
                    <div class="legendary-skill-key">4</div>
                </div>
                <div class="legendary-skill-slot" onclick="useLegendarySkill(5)" title="Thunder God - Sấm sét thần linh">
                    ⚡
                    <div class="legendary-skill-key">5</div>
                </div>
                <div class="legendary-skill-slot" onclick="useLegendarySkill(6)" title="Phoenix Revival - Hồi sinh phượng hoàng">
                    🔥
                    <div class="legendary-skill-key">6</div>
                </div>
                <div class="legendary-skill-slot" onclick="useLegendarySkill(7)" title="Shadow Step - Bước tàng hình">
                    👤
                    <div class="legendary-skill-key">7</div>
                </div>
                <div class="legendary-skill-slot" onclick="useLegendarySkill(8)" title="World Destroyer - Hủy diệt thế giới">
                    💀
                    <div class="legendary-skill-key">8</div>
                </div>
                <div class="legendary-skill-slot" onclick="useLegendarySkill(9)" title="Ultimate Skill - Kỹ năng tối thượng">
                    ✨
                    <div class="legendary-skill-key">9</div>
                </div>
            </div>

            <!-- Legendary Menu Buttons -->
            <div class="legendary-menu">
                <div class="legendary-menu-btn" onclick="openLegendaryInventory()" title="Kho báu huyền thoại (I)">🎒</div>
                <div class="legendary-menu-btn" onclick="openLegendaryCharacter()" title="Nhân vật huyền thoại (C)">👑</div>
                <div class="legendary-menu-btn" onclick="openLegendaryGuild()" title="Bang hội huyền thoại (G)">🏰</div>
                <div class="legendary-menu-btn" onclick="openLegendary<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamBooks MMO - Ultimate Edition</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            user-select: none;
        }

        body {
            font-family: 'Courier New', monospace;
            background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
            color: #fff;
            overflow: hidden;
            height: 100vh;
            image-rendering: pixelated;
        }

        .game-container {
            position: relative;
            width: 100vw;
            height: 100vh;
            background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
        }

        /* Advanced Name Tags with Titles */
        .legendary-name-tag {
            position: absolute;
            bottom: -36px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 11px;
            background: linear-gradient(135deg, rgba(0,0,0,0.95), rgba(44,62,80,0.95));
            color: #fff;
            padding: 6px 12px;
            border-radius: 8px;
            white-space: nowrap;
            min-width: 40px;
            text-align: center;
            border: 3px solid;
            font-weight: bold;
            box-shadow: 0 0 15px rgba(0,0,0,0.8);
            backdrop-filter: blur(10px);
        }

        .legendary-name-tag.player { 
            color: #74b9ff; 
            border-color: #74b9ff; 
            box-shadow: 0 0 20px rgba(116,185,255,0.6);
        }
        .legendary-name-tag.npc { 
            color: #00b894; 
            border-color: #00b894; 
            box-shadow: 0 0 20px rgba(0,184,148,0.6);
        }
        .legendary-name-tag.monster { 
            color: #e17055; 
            border-color: #e17055; 
            box-shadow: 0 0 20px rgba(225,112,85,0.6);
        }
        .legendary-name-tag.boss { 
            color: #8b4513; 
            border-color: #8b4513; 
            box-shadow: 0 0 25px rgba(139,69,19,0.8);
            animation: bossNameGlow 2s infinite ease-in-out;
        }

        /* Ultra-Enhanced Top UI */
        .legendary-top-ui {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 80px;
            background: linear-gradient(135deg, rgba(15,15,35,0.98), rgba(26,26,46,0.95), rgba(22,33,62,0.98));
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 30px;
            z-index: 1000;
            border-bottom: 4px solid #34495e;
            box-shadow: 
                0 4px 20px rgba(0,0,0,0.8),
                inset 0 1px 0 rgba(255,255,255,0.1);
            backdrop-filter: blur(20px);
        }

        .legendary-player-info {
            display: flex;
            align-items: center;
            gap: 25px;
        }

        .legendary-avatar {
            width: 60px;
            height: 60px;
            background: linear-gradient(45deg, #f39c12, #e67e22, #d35400);
            border: 4px solid #fff;
            border-radius: 16px;
            position: relative;
            overflow: hidden;
            box-shadow: 
                0 0 20px rgba(243,156,18,0.8),
                inset 0 0 20px rgba(255,255,255,0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
        }

        .legendary-avatar::before {
            content: '';
            position: absolute;
            top: -100%;
            left: -100%;
            right: -100%;
            bottom: -100%;
            background: conic-gradient(from 0deg, transparent, rgba(255,255,255,0.3), transparent);
            animation: avatarAura 3s linear infinite;
            border-radius: 50%;
        }

        .legendary-avatar::after { 
            content: '👑'; 
            position: relative; 
            z-index: 2;
            filter: drop-shadow(0 0 5px rgba(0,0,0,0.8));
        }

        .legendary-stats {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .legendary-stat-bar {
            width: 200px;
            height: 16px;
            background: rgba(0,0,0,0.9);
            border: 3px solid #444;
            border-radius: 8px;
            overflow: hidden;
            position: relative;
            box-shadow: inset 0 0 10px rgba(0,0,0,0.8);
        }

        .legendary-stat-bar::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 40%;
            background: linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05));
            border-radius: 5px 5px 0 0;
            z-index: 2;
        }

        .legendary-hp-bar { 
            background: linear-gradient(90deg, #e74c3c, #c0392b, #a93226);
            height: 100%;
            transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border-radius: 5px;
            box-shadow: 0 0 20px rgba(231,76,60,0.6);
            position: relative;
        }

        .legendary-mp-bar { 
            background: linear-gradient(90deg, #3498db, #2980b9, #1f618d);
            height: 100%;
            transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border-radius: 5px;
            box-shadow: 0 0 20px rgba(52,152,219,0.6);
        }

        .legendary-exp-bar { 
            background: linear-gradient(90deg, #f39c12, #e67e22, #d35400);
            height: 100%;
            transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border-radius: 5px;
            box-shadow: 0 0 20px rgba(243,156,18,0.6);
        }

        .legendary-level-text {
            font-size: 16px;
            color: #f39c12;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
            filter: drop-shadow(0 0 10px rgba(243,156,18,0.6));
        }

        .legendary-class-text {
            font-size: 12px;
            color: #74b9ff;
            font-weight: bold;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
        }

        /* Epic Resource Display */
        .epic-resources {
            display: flex;
            gap: 35px;
            align-items: center;
        }

        .epic-resource {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 16px;
            font-weight: bold;
            background: linear-gradient(135deg, rgba(0,0,0,0.9), rgba(44,62,80,0.8));
            padding: 12px 18px;
            border-radius: 12px;
            border: 3px solid #444;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(10px);
            box-shadow: 0 0 20px rgba(0,0,0,0.6);
        }

        .epic-resource:hover {
            border-color: #f39c12;
            transform: scale(1.05) translateY(-2px);
            box-shadow: 0 8px 25px rgba(243,156,18,0.4);
        }

        .epic-resource-icon {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            position: relative;
        }

        .epic-resource-icon::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            right: -50%;
            bottom: -50%;
            background: conic-gradient(from 0deg, transparent, rgba(255,255,255,0.3), transparent);
            animation: resourceSpin 4s linear infinite;
            border-radius: 50%;
        }

        .epic-gold { 
            background: radial-gradient(circle, #f1c40f, #f39c12); 
            box-shadow: 0 0 15px #f39c12;
        }
        .epic-gold::after { content: '🪙'; position: relative; z-index: 2; }

        .epic-diamond { 
            background: radial-gradient(circle, #74b9ff, #0984e3); 
            box-shadow: 0 0 15px #74b9ff;
        }
        .epic-diamond::after { content: '💎'; position: relative; z-index: 2; }

        .epic-crystal { 
            background: radial-gradient(circle, #e91e63, #ad1457); 
            box-shadow: 0 0 15px #e91e63;
        }
        .epic-crystal::after { content: '💎'; position: relative; z-index: 2; }

        /* Ultra-Enhanced Right Sidebar */
        .legendary-sidebar {
            position: absolute;
            top: 80px;
            right: 0;
            width: 320px;
            bottom: 160px;
            background: linear-gradient(135deg, rgba(15,15,35,0.98), rgba(26,26,46,0.95), rgba(22,33,62,0.98));
            border-left: 4px solid #34495e;
            padding: 25px;
            z-index: 900;
            overflow-y: auto;
            border-radius: 0 0 0 16px;
            backdrop-filter: blur(20px);
            box-shadow: 
                -4px 0 20px rgba(0,0,0,0.8),
                inset 1px 0 0 rgba(255,255,255,0.1);
        }

        /* Epic Minimap */
        .epic-minimap {
            width: 270px;
            height: 200px;
            background: linear-gradient(135deg, rgba(0,0,0,0.95), rgba(44,62,80,0.9));
            border: 4px solid #555;
            border-radius: 16px;
            overflow: hidden;
            position: relative;
            margin-bottom: 25px;
            box-shadow: 
                0 0 30px rgba(0,0,0,0.8),
                inset 0 0 50px rgba(255,255,255,0.05);
        }

        .epic-minimap-content {
            width: 100%;
            height: 100%;
            position: relative;
            background: linear-gradient(45deg, #2c3e50 0%, #34495e 25%, #2c3e50 50%, #34495e 75%, #2c3e50 100%);
            background-size: 30px 30px;
        }

        .epic-minimap-region {
            position: absolute;
            border-radius: 8px;
            opacity: 0.8;
            border: 2px solid rgba(255,255,255,0.2);
            transition: all 0.3s ease;
        }

        .epic-minimap-region:hover {
            opacity: 1;
            border-color: rgba(255,255,255,0.5);
            box-shadow: 0 0 15px rgba(255,255,255,0.3);
        }

        .minimap-mystical-forest { 
            background: linear-gradient(45deg, #27ae60, #2ecc71);
            box-shadow: 0 0 15px rgba(39,174,96,0.6);
        }
        .minimap-scorching-desert { 
            background: linear-gradient(45deg, #f39c12, #e67e22);
            box-shadow: 0 0 15px rgba(243,156,18,0.6);
        }
        .minimap-frozen-wasteland { 
            background: linear-gradient(45deg, #74b9ff, #0984e3);
            box-shadow: 0 0 15px rgba(116,185,255,0.6);
        }
        .minimap-infernal-volcano { 
            background: linear-gradient(45deg, #e74c3c, #c0392b);
            box-shadow: 0 0 15px rgba(231,76,60,0.6);
        }
        .minimap-shadow-realm { 
            background: linear-gradient(45deg, #2c3e50, #1a1a2e);
            box-shadow: 0 0 15px rgba(44,62,80,0.6);
        }

        .epic-minimap-dot {
            position: absolute;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            border: 3px solid rgba(255,255,255,0.9);
            transition: all 0.3s ease;
        }

        .epic-minimap-player { 
            background: #f39c12; 
            animation: epicPlayerPulse 1.5s infinite ease-in-out;
            width: 10px;
            height: 10px;
            border: 4px solid #fff;
            box-shadow: 0 0 20px rgba(243,156,18,0.8);
        }

        .epic-minimap-monster { 
            background: #e74c3c; 
            box-shadow: 0 0 10px rgba(231,76,60,0.6);
        }

        .epic-minimap-npc { 
            background: #00b894; 
            box-shadow: 0 0 10px rgba(0,184,148,0.6);
        }

        .epic-minimap-boss {
            background: #8b4513;
            width: 12px;
            height: 12px;
            border: 4px solid #cd853f;
            box-shadow: 0 0 25px rgba(139,69,19,0.8);
            animation: bossMinimapPulse 1s infinite ease-in-out;
        }

        /* Enhanced Chat System */
        .legendary-chat-window {
            position: absolute;
            bottom: 170px;
            left: 25px;
            width: 500px;
            height: 200px;
            background: linear-gradient(135deg, rgba(0,0,0,0.98), rgba(44,62,80,0.95));
            border: 4px solid #555;
            border-radius: 16px;
            padding: 20px;
            overflow-y: auto;
            font-size: 13px;
            z-index: 1000;
            backdrop-filter: blur(20px);
            box-shadow: 
                0 0 30px rgba(0,0,0,0.8),
                inset 0 1px 0 rgba(255,255,255,0.1);
        }

        .legendary-chat-message {
            margin: 6px 0;
            line-height: 1.6;
            word-wrap: break-word;
            padding: 8px 15px;
            border-radius: 12px;
            background: rgba(255,255,255,0.08);
            border-left: 4px solid transparent;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .legendary-chat-message:hover {
            background: rgba(255,255,255,0.15);
            transform: translateX(5px);
        }

        .legendary-chat-message.world { 
            color: #74b9ff; 
            border-left-color: #74b9ff;
            box-shadow: 0 0 10px rgba(116,185,255,0.2);
        }
        .legendary-chat-message.guild { 
            color: #00b894; 
            border-left-color: #00b894;
            box-shadow: 0 0 10px rgba(0,184,148,0.2);
        }
        .legendary-chat-message.system { 
            color: #f39c12; 
            border-left-color: #f39c12;
            box-shadow: 0 0 10px rgba(243,156,18,0.2);
        }
        .legendary-chat-message.combat { 
            color: #e17055; 
            border-left-color: #e17055;
            box-shadow: 0 0 10px rgba(225,112,85,0.2);
        }
        .legendary-chat-message.legendary { 
            color: #8b4513; 
            border-left-color: #8b4513;
            box-shadow: 0 0 15px rgba(139,69,19,0.4);
            animation: legendaryMessageGlow 2s infinite ease-in-out;
        }

        .legendary-chat-input {
            position: absolute;
            bottom: 170px;
            left: 545px;
            width: 350px;
            height: 45px;
            background: linear-gradient(135deg, rgba(0,0,0,0.95), rgba(44,62,80,0.9));
            border: 4px solid #555;
            border-radius: 12px;
            color: #fff;
            padding: 15px;
            font-size: 15px;
            outline: none;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(20px);
            box-shadow: 0 0 20px rgba(0,0,0,0.6);
        }

        .legendary-chat-input:focus {
            border-color: #f39c12;
            box-shadow: 
                0 0 25px rgba(243,156,18,0.6),
                inset 0 0 20px rgba(243,156,18,0.1);
            transform: scale(1.02);
        }

        .legendary-chat-input::placeholder {
            color: rgba(255,255,255,0.5);
        }

        /* Ultra-Enhanced Bottom UI */
        .legendary-bottom-ui {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 160px;
            background: linear-gradient(135deg, rgba(15,15,35,0.98), rgba(26,26,46,0.95), rgba(22,33,62,0.98));
            border-top: 4px solid #34495e;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 25px 35px;
            z-index: 1000;
            backdrop-filter: blur(20px);
            box-shadow: 
                0 -4px 20px rgba(0,0,0,0.8),
                inset 0 1px 0 rgba(255,255,255,0.1);
        }

        /* Epic Movement Controls */
        .epic-movement-pad {
            position: relative;
            width: 120px;
            height: 120px;
            background: linear-gradient(135deg, rgba(0,0,0,0.6), rgba(44,62,80,0.4));
            border-radius: 24px;
            border: 4px solid #444;
            backdrop-filter: blur(10px);
            box-shadow: 
                0 0 30px rgba(0,0,0,0.6),
                inset 0 0 20px rgba(255,255,255,0.05);
        }

        .epic-move-btn {
            position: absolute;
            width: 42px;
            height: 42px;
            background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05));
            border: 4px solid rgba(255,255,255,0.3);
            border-radius: 12px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            font-weight: bold;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            color: #fff;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
            backdrop-filter: blur(10px);
            box-shadow: 0 0 15px rgba(0,0,0,0.4);
        }

        .epic-move-btn:hover { 
            background: linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1));
            border-color: rgba(255,255,255,0.6);
            transform: scale(1.15) translateY(-2px);
            box-shadow: 0 8px 25px rgba(255,255,255,0.3);
        }

        .epic-move-btn:active { 
            background: linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.2));
            transform: scale(0.95);
        }

        .epic-move-up { top: 8px; left: 39px; }
        .epic-move-down { bottom: 8px; left: 39px; }
        .epic-move-left { top: 39px; left: 8px; }
        .epic-move-right { top: 39px; right: 8px; }

        /* Legendary Skill Bar */
        .legendary-skill-bar {
            display: flex;
            gap: 15px;
            flex: 1;
            justify-content: center;
            max-width: 900px;
            background: linear-gradient(135deg, rgba(0,0,0,0.6), rgba(44,62,80,0.4));
            padding: 20px 25px;
            border-radius: 24px;
            border: 4px solid #444;
            backdrop-filter: blur(10px);
            box-shadow: 
                0 0 30px rgba(0,0,0,0.6),
                inset 0 0 20px rgba(255,255,255,0.05);
        }

        .legendary-skill-slot {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, rgba(52, 73, 94, 0.9), rgba(44, 62, 80, 0.7));
            border: 4px solid #7f8c8d;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            font-size: 32px;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
            box-shadow: 
                0 0 20px rgba(0,0,0,0.4),
                inset 0 0 20px rgba(255,255,255,0.05);
        }

        .legendary-skill-slot::before {
            content: '';
            position: absolute;
            top: -100%;
            left: -100%;
            right: -100%;
            bottom: -100%;
            background: conic-gradient(from 0deg, transparent, rgba(255,255,255,0.2), transparent);
            opacity: 0;
            transition: opacity 0.3s ease;
            border-radius: 50%;
        }

        .legendary-skill-slot:hover {
            border-color: #f39c12;
            transform: scale(1.15) translateY(-5px);
            background: linear-gradient(135deg, rgba(52, 73, 94, 1), rgba(44, 62, 80, 0.9));
            box-shadow: 
                0 15px 35px rgba(243,156,18,0.4),
                inset 0 0 30px rgba(243,156,18,0.1);
        }

        .legendary-skill-slot:hover::before {
            opacity: 1;
            animation: skillAura 2s linear infinite;
        }

        .legendary-skill-slot.active {
            border-color: #e74c3c;
            background: linear-gradient(135deg, rgba(231, 76, 60, 0.4), rgba(192, 57, 43, 0.2));
            box-shadow: 
                0 0 40px rgba(231, 76, 60, 0.8),
                inset 0 0 30px rgba(231, 76, 60, 0.2);
            animation: legendarySkillActive 1s ease-in-out;
        }

        .legendary-skill-slot.active::before {
            opacity: 1;
            animation: activeSkillAura 1.5s linear infinite;
        }

        .legendary-skill-key {
            position: absolute;
            bottom: 4px;
            right: 6px;
            font-size: 12px;
            background: rgba(0,0,0,0.9);
            color: #fff;
            padding: 3px 6px;
            border-radius: 4px;
            font-weight: bold;
            border: 1px solid rgba(255,255,255,0.3);
        }

        /* Epic Menu Buttons */
        .legendary-menu {
            display: flex;
            flex-direction: column;
            gap: 15px;
            background: linear-gradient(135deg, rgba(0,0,0,0.6), rgba(44,62,80,0.4));
            padding: 20px;
            border-radius: 24px;
            border: 4px solid #444;
            backdrop-filter: blur(10px);
            box-shadow: 
                0 0 30px rgba(0,0,0,0.6),
                inset 0 0 20px rgba(255,255,255,0.05);
        }

        .legendary-menu-btn {
            width: 70px;
            height: 70px;
            background: linear-gradient(135deg, rgba(52, 73, 94, 0.9), rgba(44, 62, 80, 0.7));
            border: 4px solid #7f8c8d;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            font-size: 28px;
            color: #fff;
            backdrop-filter: blur(10px);
            box-shadow: 
                0 0 20px rgba(0,0,0,0.4),
                inset 0 0 20px rgba(255,255,255,0.05);
            position: relative;
            overflow: hidden;
        }

        .legendary-menu-btn::before {
            content: '';
            position: absolute;
            top: -100%;
            left: -100%;
            right: -100%;
            bottom: -100%;
            background: conic-gradient(from 0deg, transparent, rgba(255,255,255,0.2), transparent);
            opacity: 0;
            transition: opacity 0.3s ease;
            border-radius: 50%;
        }

        .legendary-menu-btn:hover {
            border-color: #f39c12;
            transform: scale(1.15) translateY(-5px);
            background: linear-gradient(135deg, rgba(52, 73, 94, 1), rgba(44, 62, 80, 0.9));
            box-shadow: 
                0 15px 35px rgba(243,156,18,0.4),
                inset 0 0 30px rgba(243,156,18,0.1);
        }

        .legendary-menu-btn:hover::before {
            opacity: 1;
            animation: menuBtnAura 2s linear infinite;
        }

        /* Epic Region Indicators */
        .legendary-region-indicator {
            position: absolute;
            top: 90px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, rgba(0,0,0,0.95), rgba(44,62,80,0.9));
            color: #fff;
            padding: 15px 30px;
            border-radius: 16px;
            font-size: 18px;
            font-weight: bold;
            border: 4px solid #555;
            z-index: 500;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(20px);
            box-shadow: 
                0 0 30px rgba(0,0,0,0.8),
                inset 0 0 20px rgba(255,255,255,0.05);
        }

        .region-mystical-forest { 
            border-color: #27ae60; 
            color: #27ae60; 
            box-shadow: 0 0 25px rgba(39,174,96,0.6);
        }
        .region-scorching-desert { 
            border-color: #f39c12; 
            color: #f39c12; 
            box-shadow: 0 0 25px rgba(243,156,18,0.6);
        }
        .region-frozen-wasteland { 
            border-color: #74b9ff; 
            color: #74b9ff; 
            box-shadow: 0 0 25px rgba(116,185,255,0.6);
        }
        .region-infernal-volcano { 
            border-color: #e74c3c; 
            color: #e74c3c; 
            box-shadow: 0 0 25px rgba(231,76,60,0.6);
        }
        .region-shadow-realm { 
            border-color: #8b4513; 
            color: #8b4513; 
            box-shadow: 0 0 25px rgba(139,69,19,0.6);
        }

        /* Advanced Modal Windows */
        .legendary-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            backdrop-filter: blur(20px);
        }

        .legendary-modal-content {
            background: linear-gradient(145deg, #2c3e50, #34495e, #2c3e50);
            border: 4px solid #555;
            border-radius: 24px;
            padding: 40px;
            max-width: 95%;
            max-height: 95%;
            overflow-y: auto;
            box-shadow: 
                0 0 80px rgba(0,0,0,0.9),
                inset 0 0 50px rgba(255,255,255,0.05);
            backdrop-filter: blur(30px);
            animation: modalAppear 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .legendary-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            border-bottom: 4px solid #555;
            padding-bottom: 20px;
        }

        .legendary-modal-title {
            font-size: 28px;
            font-weight: bold;
            color: #f39c12;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
            filter: drop-shadow(0 0 10px rgba(243,156,18,0.6));
        }

        .legendary-close-btn {
            background: linear-gradient(45deg, #e74c3c, #c0392b);
            border: none;
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 24px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 0 20px rgba(231,76,60,0.6);
        }

        .legendary-close-btn:hover {
            background: linear-gradient(45deg, #c0392b, #a93226);
            transform: scale(1.1) rotate(90deg);
            box-shadow: 0 0 30px rgba(231,76,60,0.8);
        }

        /* Epic Game Buttons */
        .legendary-game-btn {
            background: linear-gradient(45deg, #3498db, #2980b9, #1f618d);
            border: 3px solid #2471a3;
            color: white;
            padding: 12px 25px;
            border-radius: 12px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            margin: 8px;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
            box-shadow: 
                0 0 20px rgba(52,152,219,0.4),
                inset 0 1px 0 rgba(255,255,255,0.2);
            position: relative;
            overflow: hidden;
        }

        .legendary-game-btn::before {
            content: '';
            position: absolute;
            top: -100%;
            left: -100%;
            right: -100%;
            bottom: -100%;
            background: linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: transform 0.6s ease;
            transform: translateX(-100%);
        }

        .legendary-game-btn:hover::before {
            transform: translateX(100%);
        }

        .legendary-game-btn:hover {
            background: linear-gradient(45deg, #2980b9, #1f618d, #154360);
            transform: scale(1.05) translateY(-2px);
            box-shadow: 
                0 8px 30px rgba(52,152,219,0.6),
                inset 0 1px 0 rgba(255,255,255,0.3);
        }

        .legendary-game-btn.danger {
            background: linear-gradient(45deg, #e74c3c, #c0392b, #a93226);
            border-color: #922b21;
            box-shadow: 
                0 0 20px rgba(231,76,60,0.4),
                inset 0 1px 0 rgba(255,255,255,0.2);
        }

        .legendary-game-btn.success {
            background: linear-gradient(45deg, #27ae60, #229954, #1e8449);
            border-color: #196f3d;
            box-shadow: 
                0 0 20px rgba(39,174,96,0.4),
                inset 0 1px 0 rgba(255,255,255,0.2);
        }

        .legendary-game-btn.warning {
            background: linear-gradient(45deg, #f39c12, #e67e22, #d35400);
            border-color: #b7950b;
            box-shadow: 
                0 0 20px rgba(243,156,18,0.4),
                inset 0 1px 0 rgba(255,255,255,0.2);
        }

        .legendary-game-btn.mythic {
            background: linear-gradient(45deg, #8b4513, #cd853f, #daa520);
            border-color: #b8860b;
            box-shadow: 
                0 0 25px rgba(139,69,19,0.6),
                inset 0 1px 0 rgba(255,255,255,0.2);
            animation: mythicButtonGlow 2s infinite ease-in-out;
        }

        /* Legendary Damage Numbers */
        .legendary-damage-text {
            position: absolute;
            font-size: 20px;
            font-weight: bold;
            pointer-events: none;
            z-index: 400;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.9);
            animation: legendaryDamageFloat 3s ease-out forwards;
        }

        .legendary-damage-text.damage { 
            color: #e74c3c; 
            filter: drop-shadow(0 0 10px rgba(231,76,60,0.8));
        }
        .legendary-damage-text.heal { 
            color: #27ae60; 
            filter: drop-shadow(0 0 10px rgba(39,174,96,0.8));
        }
        .legendary-damage-text.critical { 
            color: #f39c12; 
            font-size: 28px;
            animation: legendaryCriticalDamage 3s ease-out forwards;
            filter: drop-shadow(0 0 15px rgba(243,156,18,0.9));
        }
        .legendary-damage-text.miss { 
            color: #95a5a6; 
            font-style: italic;
        }
        .legendary-damage-text.legendary-hit {
            color: #8b4513;
            font-size: 32px;
            animation: legendaryHitEffect 3s ease-out forwards;
            filter: drop-shadow(0 0 20px rgba(139,69,19,1));
        }

        /* Epic Animations */
        @keyframes grassSway {
            0%, 100% { transform: translate(-50%, -50%) rotate(-2deg); }
            50% { transform: translate(-50%, -50%) rotate(2deg); }
        }

        @keyframes sandShimmer {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.7; }
        }

        @keyframes cactusGlow {
            0%, 100% { filter: brightness(1); }
            50% { filter: brightness(1.3) hue-rotate(15deg); }
        }

        @keyframes iceShine {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.8; }
        }

        @keyframes snowfall {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.2); }
        }

        @keyframes lavaGlow {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
        }

        @keyframes lavaFlow {
            0%, 100% { filter: brightness(1) saturate(1); }
            50% { filter: brightness(1.4) saturate(1.6) hue-rotate(10deg); }
        }

        @keyframes lavaFlicker {
            0%, 100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            50% { opacity: 0.7; transform: translate(-50%, -50%) scale(1.1); }
        }

        @keyframes waterRipple {
            0%, 100% { filter: brightness(1) hue-rotate(0deg); }
            50% { filter: brightness(1.3) hue-rotate(10deg); }
        }

        @keyframes waterReflection {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.1); }
        }

        @keyframes shadowPulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.7; }
        }

        @keyframes shadowEye {
            0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
            25% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.2); }
            50% { opacity: 0.2; transform: translate(-50%, -50%) scale(0.8); }
            75% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.1); }
        }

        @keyframes characterAura {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        @keyframes playerGlow {
            0%, 100% { 
                box-shadow: 0 0 20px rgba(243,156,18,0.8), inset 0 0 20px rgba(255,255,255,0.2);
            }
            50% { 
                box-shadow: 0 0 35px rgba(243,156,18,1), inset 0 0 30px rgba(255,255,255,0.3);
            }
        }

        @keyframes warriorFire {
            0%, 100% { 
                box-shadow: 0 0 25px rgba(231,76,60,0.9);
                filter: brightness(1);
            }
            50% { 
                box-shadow: 0 0 40px rgba(231,76,60,1), 0 0 60px rgba(243,156,18,0.6);
                filter: brightness(1.2) hue-rotate(15deg);
            }
        }

        @keyframes mageAura {
            0%, 100% { 
                box-shadow: 0 0 25px rgba(155,89,182,0.9);
            }
            33% { 
                box-shadow: 0 0 40px rgba(155,89,182,1), 0 0 60px rgba(52,152,219,0.6);
            }
            66% { 
                box-shadow: 0 0 40px rgba(155,89,182,1), 0 0 60px rgba(116,185,255,0.6);
            }
        }

        @keyframes shadowShift {
            0%, 100% { 
                box-shadow: 0 0 25px rgba(44,62,80,0.9);
                opacity: 1;
            }
            25% { 
                opacity: 0.7;
                box-shadow: 0 0 15px rgba(44,62,80,0.6);
            }
            50% { 
                opacity: 0.9;
                box-shadow: 0 0 35px rgba(44,62,80,1);
            }
            75% { 
                opacity: 0.8;
                box-shadow: 0 0 20px rgba(44,62,80,0.7);
            }
        }

        @keyframes divineLight {
            0%, 100% { 
                box-shadow: 0 0 25px rgba(241,196,15,0.9);
            }
            50% { 
                box-shadow: 
                    0 0 50px rgba(241,196,15,1), 
                    0 0 80px rgba(255,255,255,0.6),
                    0 0 120px rgba(243,156,18,0.4);
            }
        }

        @keyframes naturePower {
            0%, 100% { 
                box-shadow: 0 0 25px rgba(39,174,96,0.9);
            }
            50% { 
                box-shadow: 0 0 40px rgba(39,174,96,1), 0 0 60px rgba(46,204,113,0.6);
            }
        }

        @keyframes monsterAura {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
        }

        @keyframes monsterIdle {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-6px) scale(1.05); }
        }

        @keyframes serpentSlither {
            0%, 100% { transform: translateX(0px) rotate(0deg); }
            25% { transform: translateX(-2px) rotate(-5deg); }
            75% { transform: translateX(2px) rotate(5deg); }
        }

        @keyframes frostAura {
            0%, 100% { 
                box-shadow: 0 0 25px rgba(116,185,255,0.9);
                filter: brightness(1);
            }
            50% { 
                box-shadow: 0 0 50px rgba(116,185,255,1), 0 0 80px rgba(168,230,207,0.8);
                filter: brightness(1.3) hue-rotate(20deg);
            }
        }

        @keyframes dragonBreath {
            0%, 100% { 
                transform: scale(1);
                filter: brightness(1);
            }
            25% { 
                transform: scale(1.1);
                filter: brightness(1.2);
            }
            50% { 
                transform: scale(1.05);
                filter: brightness(1.4) hue-rotate(30deg);
            }
            75% { 
                transform: scale(1.08);
                filter: brightness(1.1);
            }
        }

        @keyframes demonFire {
            0%, 100% { 
                filter: brightness(1);
                box-shadow: 0 0 35px rgba(231,76,60,1);
            }
            25% { 
                filter: brightness(1.3) hue-rotate(15deg);
                box-shadow: 0 0 50px rgba(231,76,60,1), 0 0 80px rgba(243,156,18,0.8);
            }
            50% { 
                filter: brightness(1.5) hue-rotate(30deg);
                box-shadow: 0 0 60px rgba(231,76,60,1), 0 0 100px rgba(243,156,18,1);
            }
            75% { 
                filter: brightness(1.2) hue-rotate(10deg);
                box-shadow: 0 0 45px rgba(231,76,60,1), 0 0 70px rgba(243,156,18,0.6);
            }
        }

        @keyframes phoenixFlight {
            0%, 100% { 
                transform: translateY(0px) scale(1);
                filter: brightness(1);
            }
            25% { 
                transform: translateY(-8px) scale(1.1);
                filter: brightness(1.3) hue-rotate(15deg);
            }
            50% { 
                transform: translateY(-12px) scale(1.05);
                filter: brightness(1.5) hue-rotate(30deg);
            }
            75% { 
                transform: translateY(-6px) scale(1.08);
                filter: brightness(1.2) hue-rotate(10deg);
            }
        }

        @keyframes emperorPower {
            0%, 100% { 
                box-shadow: 
                    0 0 50px rgba(139,69,19,1),
                    inset 0 0 30px rgba(255,255,255,0.1);
                filter: brightness(1);
            }
            25% { 
                box-shadow: 
                    0 0 80px rgba(139,69,19,1),
                    0 0 120px rgba(205,133,63,0.8),
                    inset 0 0 40px rgba(255,255,255,0.2);
                filter: brightness(1.2);
            }
            50% { 
                box-shadow: 
                    0 0 100px rgba(139,69,19,1),
                    0 0 150px rgba(205,133,63,1),
                    0 0 200px rgba(218,165,32,0.6),
                    inset 0 0 50px rgba(255,255,255,0.3);
                filter: brightness(1.4) contrast(1.2);
            }
            75% { 
                box-shadow: 
                    0 0 70px rgba(139,69,19,1),
                    0 0 100px rgba(205,133,63,0.9),
                    inset 0 0 35px rgba(255,255,255,0.15);
                filter: brightness(1.1);
            }
        }

        @keyframes petFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-8px) rotate(5deg); }
            66% { transform: translateY(-4px) rotate(-3deg); }
        }

        @keyframes phoenixFire {
            0%, 100% { 
                filter: brightness(1);
                transform: translateY(0px) scale(1);
                box-shadow: 0 0 15px rgba(243,156,18,0.8);
            }
            50% { 
                filter: brightness(1.4) hue-rotate(15deg);
                transform: translateY(-10px) scale(1.1);
                box-shadow: 0 0 25px rgba(243,156,18,1), 0 0 40px rgba(231,76,60,0.6);
            }
        }

        @keyframes voidPower {
            0%, 100% { 
                box-shadow: 0 0 15px rgba(44,62,80,0.8);
                opacity: 1;
            }
            25% { 
                opacity: 0.7;
            }
            50% { 
                box-shadow: 0 0 25px rgba(44,62,80,1), 0 0 40px rgba(26,26,46,0.8);
                opacity: 0.9;
            }
            75% { 
                opacity: 0.8;
            }
        }

        @keyframes celestialGlow {
            0%, 100% { 
                box-shadow: 0 0 15px rgba(241,196,15,0.8);
            }
            33% { 
                box-shadow: 0 0 25px rgba(241,196,15,1), 0 0 40px rgba(116,185,255,0.6);
            }
            66% { 
                box-shadow: 0 0 25px rgba(116,185,255,1), 0 0 40px rgba(241,196,15,0.6);
            }
        }

        @keyframes stormDragonFly {
            0%, 100% { 
                transform: translateY(0px) scale(1);
                box-shadow: 0 0 25px rgba(116,185,255,0.9);
            }
            50% { 
                transform: translateY(-15px) scale(1.05);
                box-shadow: 
                    0 0 40px rgba(116,185,255,1), 
                    0 0 60px rgba(9,132,227,0.8);
            }
        }

        @keyframes shadowGallop {
            0%, 100% { 
                transform: translateY(0px);
                box-shadow: 0 0 25px rgba(44,62,80,0.9);
                opacity: 1;
            }
            25% { 
                transform: translateY(-5px);
                opacity: 0.8;
            }
            50% { 
                transform: translateY(-12px);
                box-shadow: 0 0 35px rgba(44,62,80,1);
                opacity: 0.9;
            }
            75% { 
                transform: translateY(-8px);
                opacity: 0.85;
            }
        }

        @keyframes legendaryFloat {
            0%, 100% { 
                transform: translateY(0px) rotate(0deg) scale(1);
                opacity: 0.9;
            }
            33% { 
                transform: translateY(-10px) rotate(5deg) scale(1.1);
                opacity: 1;
            }
            66% { 
                transform: translateY(-5px) rotate(-3deg) scale(1.05);
                opacity: 0.95;
            }
        }

        @keyframes dropSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        @keyframes artifactPower {
            0%, 100% { 
                box-shadow: 0 0 20px rgba(139,69,19,0.9);
                filter: brightness(1);
            }
            50% { 
                box-shadow: 0 0 35px rgba(139,69,19,1), 0 0 50px rgba(205,133,63,0.8);
                filter: brightness(1.3) hue-rotate(15deg);
            }
        }

        @keyframes mythicAura {
            0%, 100% { 
                box-shadow: 0 0 25px rgba(233,30,99,0.9);
            }
            50% { 
                box-shadow: 0 0 40px rgba(233,30,99,1), 0 0 60px rgba(173,20,87,0.8);
            }
        }

        @keyframes divineRadiance {
            0%, 100% { 
                box-shadow: 0 0 30px rgba(255,255,255,0.9);
                filter: brightness(1);
            }
            50% { 
                box-shadow: 
                    0 0 50px rgba(255,255,255,1), 
                    0 0 80px rgba(241,196,15,0.8),
                    0 0 120px rgba(243,156,18,0.6);
                filter: brightness(1.5);
            }
        }

        @keyframes criticalPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }

        @keyframes bossNameGlow {
            0%, 100% { 
                box-shadow: 0 0 25px rgba(139,69,19,0.8);
                text-shadow: 0 0 10px rgba(139,69,19,0.6);
            }
            50% { 
                box-shadow: 0 0 40px rgba(139,69,19,1), 0 0 60px rgba(205,133,63,0.8);
                text-shadow: 0 0 20px rgba(139,69,19,0.9);
            }
        }

        @keyframes avatarAura {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        @keyframes resourceSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        @keyframes epicPlayerPulse {
            0%, 100% { 
                transform: scale(1);
                box-shadow: 0 0 20px rgba(243,156,18,0.8);
            }
            50% { 
                transform: scale(1.4);
                box-shadow: 0 0 35px rgba(243,156,18,1);
            }
        }

        @keyframes bossMinimapPulse {
            0%, 100% { 
                transform: scale(1);
                box-shadow: 0 0 25px rgba(139,69,19,0.8);
            }
            50% { 
                transform: scale(1.3);
                box-shadow: 0 0 40px rgba(139,69,19,1);
            }
        }

        @keyframes legendaryMessageGlow {
            0%, 100% { 
                box-shadow: 0 0 15px rgba(139,69,19,0.4);
                border-left-color: rgba(139,69,19,0.8);
            }
            50% { 
                box-shadow: 0 0 25px rgba(139,69,19,0.6);
                border-left-color: rgba(139,69,19,1);
            }
        }

        @keyframes skillAura {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        @keyframes activeSkillAura {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
        }

        @keyframes legendarySkillActive {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1.15); }
        }

        @keyframes menuBtnAura {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        @keyframes modalAppear {
            0% { 
                opacity: 0; 
                transform: scale(0.8) translateY(-50px);
            }
            100% { 
                opacity: 1; 
                transform: scale(1) translateY(0);
            }
        }

        @keyframes mythicButtonGlow {
            0%, 100% { 
                box-shadow: 0 0 25px rgba(139,69,19,0.6), inset 0 1px 0 rgba(255,255,255,0.2);
            }
            50% { 
                box-shadow: 0 0 40px rgba(139,69,19,0.8), inset 0 1px 0 rgba(255,255,255,0.3);
            }
        }

        @keyframes legendaryDamageFloat {
            0% { 
                opacity: 1; 
                transform: translateY(0) scale(1);
            }
            100% { 
                opacity: 0; 
                transform: translateY(-80px) scale(0.8);
            }
        }

        @keyframes legendaryCriticalDamage {
            0% { 
                opacity: 1; 
                transform: translateY(0) scale(1.8);
            }
            20% { 
                transform: translateY(-20px) scale(2.2);
            }
            100% { 
                opacity: 0; 
                transform: translateY(-120px) scale(1.2);
            }
        }

        @keyframes legendaryHitEffect {
            0% { 
                opacity: 1; 
                transform: translateY(0) scale(2);
                filter: brightness(2) saturate(2);
            }
            20% { 
                transform: translateY(-30px) scale(2.5);
                filter: brightness(2.5) saturate(2.5);
            }
            40% { 
                transform: translateY(-50px) scale(2.2);
                filter: brightness(2.2) saturate(2);
            }
            100% { 
                opacity: 0; 
                transform: translateY(-150px) scale(1.5);
                filter: brightness(1) saturate(1);
            }
        }

        /* Responsive Design for Ultimate Edition */
        @media (max-width: 1200px) {
            .legendary-sidebar { width: 280px; }
            .legendary-chat-window { width: 450px; height: 180px; }
            .legendary-chat-input { width: 320px; }
            .legendary-skill-slot { width: 70px; height: 70px; font-size: 28px; }
            .legendary-menu-btn { width: 60px; height: 60px; font-size: 24px; }
        }

        @media (max-width: 1024px) {
            .legendary-sidebar { width: 250px; }
            .epic-minimap { width: 220px; height: 165px; }
            .legendary-chat-window { width: 400px; height: 160px; }
            .legendary-chat-input { width: 280px; }
            .legendary-skill-slot { width: 65px; height: 65px; font-size: 26px; }
        }

        @media (max-width: 768px) {
            .legendary-top-ui { height: 70px; padding: 10px 20px; }
            .legendary-avatar { width: 50px; height: 50px; font-size: 28px; }
            .legendary-stat-bar { width: 160px; height: 14px; }
            .legendary-sidebar { display: none; }
            .game-world { right: 0; }
            .legendary-chat-window { 
                width: 350px; 
                height: 140px; 
                font-size: 12px;
                bottom: 130px;
            }
            .legendary-chat-input {
                width: 250px;
                bottom: 130px;
            }
            .legendary-skill-slot { width: 55px; height: 55px; font-size: 22px; }
            .legendary-menu-btn Advanced Particle Background */
        .particle-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="10" cy="10" r="1" fill="%23ffffff" opacity="0.3"/><circle cx="90" cy="20" r="1" fill="%23ffffff" opacity="0.2"/><circle cx="50" cy="50" r="1" fill="%23ffffff" opacity="0.4"/><circle cx="20" cy="80" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="80" cy="90" r="1" fill="%23ffffff" opacity="0.3"/></svg>') repeat;
            animation: starsMove 60s linear infinite;
        }

        @keyframes starsMove {
            0% { transform: translateY(0); }
            100% { transform: translateY(-100px); }
        }

        /* Enhanced Game World */
        .game-world {
            position: absolute;
            top: 80px;
            left: 0;
            right: 320px;
            bottom: 160px;
            overflow: hidden;
            background: linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #2c3e50 100%);
            border: 4px solid #34495e;
            border-radius: 12px;
            box-shadow: inset 0 0 50px rgba(0,0,0,0.5);
            z-index: 10;
        }

        .world-grid {
            position: absolute;
            width: 9600px;
            height: 7200px;
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            background-image: 
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
            background-size: 32px 32px;
        }

        /* Ultra-Enhanced Tile System */
        .tile {
            position: absolute;
            width: 32px;
            height: 32px;
            image-rendering: pixelated;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 1px solid transparent;
            overflow: hidden;
        }

        .tile::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .tile:hover::before {
            opacity: 0.3;
            background: radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%);
        }

        /* Mystical Forest Region */
        .forest-grass { 
            background: linear-gradient(135deg, #2ecc71 0%, #27ae60 50%, #1e8449 100%);
            box-shadow: inset 2px 2px 4px rgba(46,204,113,0.4);
            position: relative;
        }
        .forest-grass:after { 
            content: '🌱'; 
            font-size: 14px; 
            position: absolute; 
            top: 50%; 
            left: 50%; 
            transform: translate(-50%, -50%);
            animation: grassSway 3s infinite ease-in-out;
        }

        .ancient-tree { 
            background: linear-gradient(135deg, #8b4513 0%, #654321 50%, #3e2723 100%);
            box-shadow: inset 3px 3px 6px rgba(0,0,0,0.6);
            border-radius: 6px;
        }
        .ancient-tree:after { 
            content: '🌳'; 
            font-size: 20px; 
            position: absolute; 
            top: 2px; 
            left: 2px;
            filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.8));
        }

        /* Scorching Desert Region */
        .desert-sand { 
            background: linear-gradient(135deg, #f1c40f 0%, #f39c12 50%, #e67e22 100%);
            box-shadow: inset 1px 1px 3px rgba(0,0,0,0.3);
            position: relative;
            overflow: hidden;
        }
        .desert-sand::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: repeating-linear-gradient(
                45deg,
                transparent,
                transparent 2px,
                rgba(255,255,255,0.1) 2px,
                rgba(255,255,255,0.1) 4px
            );
            animation: sandShimmer 4s infinite ease-in-out;
        }
        .desert-sand:after { 
            content: '🏜️'; 
            font-size: 12px; 
            position: absolute; 
            bottom: 2px; 
            right: 2px; 
            opacity: 0.8; 
        }

        .mystic-cactus { 
            background: linear-gradient(135deg, #27ae60 0%, #2ecc71 50%, #58d68d 100%);
            border-radius: 4px;
            position: relative;
        }
        .mystic-cactus:after { 
            content: '🌵'; 
            font-size: 18px; 
            position: absolute; 
            top: 4px; 
            left: 4px;
            animation: cactusGlow 2s infinite ease-in-out;
        }

        /* Frozen Wasteland Region */
        .ice-crystal { 
            background: linear-gradient(135deg, #74b9ff 0%, #0984e3 50%, #2d3436 100%);
            box-shadow: inset 0 0 10px rgba(116,185,255,0.6);
            border-radius: 8px;
            position: relative;
        }
        .ice-crystal::before {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            right: 2px;
            bottom: 2px;
            background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.6) 50%, transparent 70%);
            border-radius: 6px;
            animation: iceShine 3s infinite ease-in-out;
        }
        .ice-crystal:after { 
            content: '💎'; 
            font-size: 16px; 
            position: absolute; 
            top: 50%; 
            left: 50%; 
            transform: translate(-50%, -50%);
            z-index: 2;
        }

        .frozen-ground { 
            background: linear-gradient(135deg, #a8e6cf 0%, #74b9ff 50%, #0984e3 100%);
            box-shadow: inset 0 0 8px rgba(116,185,255,0.5);
            position: relative;
        }
        .frozen-ground:after { 
            content: '❄️'; 
            font-size: 14px; 
            position: absolute; 
            top: 50%; 
            left: 50%; 
            transform: translate(-50%, -50%);
            animation: snowfall 2s infinite ease-in-out;
        }

        /* Infernal Volcano Region */
        .molten-rock { 
            background: linear-gradient(135deg, #2c3e50 0%, #e74c3c 30%, #c0392b 100%);
            box-shadow: inset 2px 2px 4px rgba(0,0,0,0.8);
            border-radius: 3px;
            position: relative;
        }
        .molten-rock::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, transparent 60%, rgba(231,76,60,0.4) 80%, transparent 100%);
            animation: lavaGlow 2s infinite ease-in-out;
        }
        .molten-rock:after { 
            content: '🗿'; 
            font-size: 14px; 
            position: absolute; 
            top: 50%; 
            left: 50%; 
            transform: translate(-50%, -50%);
            z-index: 2;
        }

        .lava-pool { 
            background: linear-gradient(135deg, #e74c3c 0%, #c0392b 50%, #a93226 100%);
            animation: lavaFlow 1.5s infinite ease-in-out;
            position: relative;
            border-radius: 50%;
            box-shadow: 0 0 20px rgba(231,76,60,0.8);
        }
        .lava-pool:before { 
            content: '🔥'; 
            font-size: 18px; 
            position: absolute; 
            top: 50%; 
            left: 50%; 
            transform: translate(-50%, -50%); 
            animation: lavaFlicker 0.5s infinite ease-in-out;
            z-index: 2;
        }

        /* Mystical Water Region */
        .enchanted-water { 
            background: linear-gradient(135deg, #3498db 0%, #2980b9 50%, #1f4e79 100%);
            animation: waterRipple 4s infinite ease-in-out;
            position: relative;
            border-radius: 4px;
        }
        .enchanted-water::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%);
            border-radius: 4px;
            animation: waterReflection 3s infinite ease-in-out;
        }
        .enchanted-water:after { 
            content: '💧'; 
            font-size: 16px; 
            position: absolute; 
            top: 50%; 
            left: 50%; 
            transform: translate(-50%, -50%);
            z-index: 2;
        }

        /* Shadow Realm Region */
        .shadow-void {
            background: linear-gradient(135deg, #2c3e50 0%, #34495e 25%, #1a252f 50%, #0f0f23 100%);
            position: relative;
            border-radius: 2px;
        }
        .shadow-void::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle, rgba(139,69,19,0.3) 0%, transparent 70%);
            animation: shadowPulse 3s infinite ease-in-out;
        }
        .shadow-void:after {
            content: '👁️';
            font-size: 12px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0.6;
            animation: shadowEye 4s infinite ease-in-out;
        }

        /* Ultra-Enhanced Character System */
        .character {
            position: absolute;
            width: 36px;
            height: 36px;
            z-index: 200;
            image-rendering: pixelated;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            border: 3px solid transparent;
            overflow: hidden;
        }

        .character::before {
            content: '';
            position: absolute;
            top: -100%;
            left: -100%;
            right: -100%;
            bottom: -100%;
            background: conic-gradient(from 0deg, transparent, rgba(255,255,255,0.2), transparent);
            animation: characterAura 3s linear infinite;
            border-radius: 50%;
        }

        /* Legendary Player Classes */
        .player {
            background: linear-gradient(45deg, #f39c12 0%, #e67e22 50%, #d35400 100%);
            border: 4px solid #fff;
            box-shadow: 
                0 0 20px rgba(243,156,18,0.8),
                inset 0 0 20px rgba(255,255,255,0.2);
            animation: playerGlow 2s infinite ease-in-out;
        }

        .legendary-warrior { 
            background: linear-gradient(45deg, #e74c3c 0%, #c0392b 50%, #a93226 100%);
            box-shadow: 0 0 25px rgba(231,76,60,0.9);
            animation: warriorFire 2s infinite ease-in-out;
        }
        .legendary-warrior::after { content: '⚔️'; position: relative; z-index: 3; }

        .archmage { 
            background: linear-gradient(45deg, #9b59b6 0%, #8e44ad 50%, #7d3c98 100%);
            box-shadow: 0 0 25px rgba(155,89,182,0.9);
            animation: mageAura 3s infinite ease-in-out;
        }
        .archmage::after { content: '🔮'; position: relative; z-index: 3; }

        .shadow-assassin { 
            background: linear-gradient(45deg, #2c3e50 0%, #34495e 50%, #1a252f 100%);
            box-shadow: 0 0 25px rgba(44,62,80,0.9);
            animation: shadowShift 2s infinite ease-in-out;
        }
        .shadow-assassin::after { content: '🗡️'; position: relative; z-index: 3; }

        .divine-paladin { 
            background: linear-gradient(45deg, #f1c40f 0%, #f39c12 50%, #e67e22 100%);
            box-shadow: 0 0 25px rgba(241,196,15,0.9);
            animation: divineLight 2.5s infinite ease-in-out;
        }
        .divine-paladin::after { content: '🛡️'; position: relative; z-index: 3; }

        .nature-ranger { 
            background: linear-gradient(45deg, #27ae60 0%, #229954 50%, #1e8449 100%);
            box-shadow: 0 0 25px rgba(39,174,96,0.9);
            animation: naturePower 2s infinite ease-in-out;
        }
        .nature-ranger::after { content: '🏹'; position: relative; z-index: 3; }

        /* Legendary Monster System */
        .monster {
            position: absolute;
            width: 42px;
            height: 42px;
            z-index: 150;
            border-radius: 10px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            animation: monsterIdle 2.5s infinite ease-in-out;
            border: 3px solid rgba(231,76,60,0.7);
            transition: all 0.3s ease;
            overflow: hidden;
        }

        .monster::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            right: -50%;
            bottom: -50%;
            background: conic-gradient(from 0deg, transparent, rgba(231,76,60,0.3), transparent);
            animation: monsterAura 4s linear infinite;
            border-radius: 50%;
        }

        .monster:hover {
            transform: scale(1.1);
            box-shadow: 0 0 30px rgba(231,76,60,0.8);
        }

        /* Forest Legendary Monsters */
        .ancient-treant {
            background: linear-gradient(45deg, #27ae60, #2ecc71);
            box-shadow: 0 0 20px rgba(39,174,96,0.8);
            width: 48px;
            height: 48px;
            font-size: 28px;
        }
        .ancient-treant::after { content: '🌳'; position: relative; z-index: 3; }

        .shadow-wolf {
            background: linear-gradient(45deg, #2c3e50, #34495e);
            box-shadow: 0 0 20px rgba(44,62,80,0.8);
        }
        .shadow-wolf::after { content: '🐺'; position: relative; z-index: 3; }

        /* Desert Legendary Monsters */
        .sand-colossus {
            background: linear-gradient(45deg, #f39c12, #e67e22);
            box-shadow: 0 0 20px rgba(243,156,18,0.8);
            width: 52px;
            height: 52px;
            font-size: 32px;
        }
        .sand-colossus::after { content: '🗿'; position: relative; z-index: 3; }

        .venom-serpent {
            background: linear-gradient(45deg, #27ae60, #2ecc71);
            box-shadow: 0 0 20px rgba(39,174,96,0.8);
            animation: serpentSlither 1.5s infinite ease-in-out;
        }
        .venom-serpent::after { content: '🐍'; position: relative; z-index: 3; }

        /* Ice Legendary Monsters */
        .frost-titan {
            background: linear-gradient(45deg, #74b9ff, #0984e3);
            box-shadow: 0 0 25px rgba(116,185,255,0.9);
            width: 54px;
            height: 54px;
            font-size: 36px;
            animation: frostAura 3s infinite ease-in-out;
        }
        .frost-titan::after { content: '👹'; position: relative; z-index: 3; }

        .ice-dragon {
            background: linear-gradient(45deg, #a8e6cf, #74b9ff);
            box-shadow: 0 0 30px rgba(168,230,207,0.9);
            width: 58px;
            height: 58px;
            font-size: 40px;
            animation: dragonBreath 2s infinite ease-in-out;
        }
        .ice-dragon::after { content: '🐲'; position: relative; z-index: 3; }

        /* Infernal Legendary Monsters */
        .demon-lord {
            background: linear-gradient(45deg, #e74c3c, #c0392b);
            box-shadow: 0 0 35px rgba(231,76,60,1);
            width: 56px;
            height: 56px;
            font-size: 38px;
            animation: demonFire 1.5s infinite ease-in-out;
        }
        .demon-lord::after { content: '😈'; position: relative; z-index: 3; }

        .inferno-phoenix {
            background: linear-gradient(45deg, #f39c12, #e74c3c);
            box-shadow: 0 0 40px rgba(243,156,18,1);
            width: 60px;
            height: 60px;
            font-size: 42px;
            animation: phoenixFlight 3s infinite ease-in-out;
        }
        .inferno-phoenix::after { content: '🔥'; position: relative; z-index: 3; }

        /* Ultimate Boss */
        .shadow-emperor {
            background: linear-gradient(45deg, #1a1a2e, #16213e, #0f0f23);
            box-shadow: 
                0 0 50px rgba(139,69,19,1),
                inset 0 0 30px rgba(255,255,255,0.1);
            width: 64px;
            height: 64px;
            font-size: 48px;
            animation: emperorPower 2s infinite ease-in-out;
            border: 4px solid #8b4513;
        }
        .shadow-emperor::after { content: '👑'; position: relative; z-index: 3; }

        /* Legendary Pet System */
        .legendary-pet {
            position: absolute;
            width: 28px;
            height: 28px;
            z-index: 190;
            border-radius: 50%;
            animation: petFloat 2.5s infinite ease-in-out;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            border: 3px solid rgba(255,255,255,0.6);
            overflow: hidden;
        }

        .pet-phoenix { 
            background: radial-gradient(circle, #f39c12 30%, #e74c3c 70%); 
            box-shadow: 0 0 15px rgba(243,156,18,0.8);
            animation: phoenixFire 1.5s infinite ease-in-out;
        }
        .pet-phoenix::after { content: '🔥'; position: relative; z-index: 3; }

        .pet-void-dragon { 
            background: radial-gradient(circle, #2c3e50 30%, #1a1a2e 70%); 
            box-shadow: 0 0 15px rgba(44,62,80,0.8);
            animation: voidPower 2s infinite ease-in-out;
        }
        .pet-void-dragon::after { content: '🐉'; position: relative; z-index: 3; }

        .pet-celestial { 
            background: radial-gradient(circle, #f1c40f 30%, #74b9ff 70%); 
            box-shadow: 0 0 15px rgba(241,196,15,0.8);
            animation: celestialGlow 3s infinite ease-in-out;
        }
        .pet-celestial::after { content: '⭐'; position: relative; z-index: 3; }

        /* Epic Mount System */
        .epic-mount {
            position: absolute;
            width: 48px;
            height: 42px;
            z-index: 180;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 26px;
            border: 4px solid rgba(255,255,255,0.8);
            overflow: hidden;
        }

        .mount-storm-dragon { 
            background: linear-gradient(45deg, #74b9ff, #0984e3); 
            box-shadow: 0 0 25px rgba(116,185,255,0.9);
            animation: stormDragonFly 3s infinite ease-in-out;
        }
        .mount-storm-dragon::after { content: '🐲'; position: relative; z-index: 3; }

        .mount-shadow-steed { 
            background: linear-gradient(45deg, #2c3e50, #1a1a2e); 
            box-shadow: 0 0 25px rgba(44,62,80,0.9);
            animation: shadowGallop 2.5s infinite ease-in-out;
        }
        .mount-shadow-steed::after { content: '🐴'; position: relative; z-index: 3; }

        .mount-phoenix { 
            background: linear-gradient(45deg, #f39c12, #e74c3c); 
            box-shadow: 0 0 25px rgba(243,156,18,0.9);
            animation: phoenixFlight 2s infinite ease-in-out;
        }
        .mount-phoenix::after { content: '🔥'; position: relative; z-index: 3; }

        /* Legendary Equipment Drops */
        .legendary-drop {
            position: absolute;
            width: 28px;
            height: 28px;
            z-index: 160;
            cursor: pointer;
            animation: legendaryFloat 2s infinite ease-in-out;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            border: 3px solid;
            overflow: hidden;
        }

        .legendary-drop::before {
            content: '';
            position: absolute;
            top: -100%;
            left: -100%;
            right: -100%;
            bottom: -100%;
            background: conic-gradient(from 0deg, transparent, rgba(255,255,255,0.4), transparent);
            animation: dropSpin 2s linear infinite;
            border-radius: 50%;
        }

        .drop-artifact { 
            border-color: #8b4513; 
            background: linear-gradient(45deg, #8b4513, #cd853f);
            box-shadow: 0 0 20px rgba(139,69,19,0.9);
            animation: artifactPower 1.5s infinite ease-in-out;
        }

        .drop-mythic { 
            border-color: #e91e63; 
            background: linear-gradient(45deg, #e91e63, #ad1457);
            box-shadow: 0 0 25px rgba(233,30,99,0.9);
            animation: mythicAura 2s infinite ease-in-out;
        }

        .drop-divine { 
            border-color: #fff; 
            background: linear-gradient(45deg, #fff, #f1c40f);
            box-shadow: 0 0 30px rgba(255,255,255,0.9);
            animation: divineRadiance 1.8s infinite ease-in-out;
        }

        /* Advanced Health/Mana System */
        .advanced-hp-bar {
            position: absolute;
            top: -24px;
            left: 50%;
            transform: translateX(-50%);
            width: 48px;
            height: 12px;
            background: rgba(0,0,0,0.9);
            border: 3px solid #333;
            border-radius: 6px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0,0,0,0.8);
        }

        .advanced-hp-fill {
            height: 100%;
            background: linear-gradient(90deg, #27ae60, #2ecc71, #58d68d);
            transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            border-radius: 3px;
            box-shadow: 
                inset 0 2px 4px rgba(255,255,255,0.4),
                0 0 15px rgba(46,204,113,0.6);
            position: relative;
        }

        .advanced-hp-fill::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 50%;
            background: linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1));
            border-radius: 3px 3px 0 0;
        }

        .advanced-hp-fill.critical { 
            background: linear-gradient(90deg, #e74c3c, #c0392b, #a93226);
            box-shadow: 
                inset 0 2px 4px rgba(255,255,255,0.4),
                0 0 20px rgba(231,76,60,0.8);
            animation: criticalPulse 0.5s infinite ease-in-out;
        }

        .advanced-hp-fill.medium { 
            background: linear-gradient(90deg, #f39c12, #e67e22, #d35400);
            box-shadow: 
                inset 0 2px 4px rgba(255,255,255,0.4),
                0 0 15px rgba(243,156,18,0.6);
        }

        /*
