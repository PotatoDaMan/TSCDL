import List from './pages/List.js';
import Challenge_List from './pages/Challenge_List.js';
import Leaderboard from './pages/Leaderboard.js';
import Roulette from './pages/Roulette.js';

export default [
    { path: '/', component: List },
    { path: '/challenge', component: Challenge_List },
    { path: '/leaderboard', component: Leaderboard },
    { path: '/roulette', component: Roulette },
];
