import mongoose from 'mongoose';
import Role from '../models/role.js';
import db from './db.js';

const roles = [
  {
    label: 'Regular user',
    privilegeLevel: 3,
    canRead: true,
    canWriteSelf: true,
    canWriteOthers: false,
    canDelete: false,
  },
  {
    label: 'Moderator',
    privilegeLevel: 2,
    canRead: true,
    canWriteSelf: true,
    canWriteOthers: true,
    canDelete: false,
  },
  {
    label: 'Administrator',
    privilegeLevel: 1,
    canRead: true,
    canWriteSelf: true,
    canWriteOthers: true,
    canDelete: true,
  },
  {
    label: 'Deactivated user',
    privilegeLevel: 4,
    canRead: false,
    canWriteSelf: false,
    canWriteOthers: false,
    canDelete: false,
  },
];

const seedRoles = async () => {
  try {
    await db.connect();

    await Role.deleteMany({});
    await Role.insertMany(roles);

    console.log('Roles seeded successfully');
    await db.close();
  } catch (error) {
    console.error('Error seeding roles:', error);
    await db.close();
  }
};

seedRoles();
